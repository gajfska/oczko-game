import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PlayerModel} from '../../shared/player.model';
import {Card} from '../../shared/card.model';
import {ScoreService} from '../../shared/score.service';
import {ConnectService} from '../../shared/connect.service';
import {GameResult} from '../../shared/game-result.model';
import {showAnimation} from '../../shared/animation';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  animations: [ showAnimation ]
})
export class PlayerComponent {

  @Input() player: PlayerModel;
  @Output() gameResultEvent = new EventEmitter<{}>();

  cards: Card[] = [];

  constructor(private connectService: ConnectService,
              private scoreService: ScoreService) {
  }

  isPassDisabled(): boolean {
    return (!this.player.isActive || this.cards.length == 0);
  }

  drawCardAction() {
    if (this.cards.length === 0) {
      this.drawCard(2);
    } else {
      this.drawCard(1);
    }
  }

  passAction() {
    this.player.gameResult = GameResult.pass;
    this.player.isPlaying = false;

    this.gameResultEvent.emit();
  }

  private drawCard(count: number) {
    this.connectService.drawCard(count)
      .subscribe(newCards => {
        for (const newCard of newCards) {
          this.cards.push(newCard);
        }
        this.updatePlayerState();
      });
  }

  private updatePlayerState() {
    this.player.score = this.scoreService.sumScore(this.cards);

    this.player.gameResult = this.scoreService.checkGameResult( this.player.score, this.cards.length);
    this.player.isPlaying = this.player.gameResult === GameResult.inProgress;

    if (this.player.gameResult !== GameResult.inProgress) {
      this.gameResultEvent.emit();
    }
  }

}