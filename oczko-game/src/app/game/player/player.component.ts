import {Component, Input, OnInit} from '@angular/core';
import {PlayerModel} from '../../shared/player.model';
import {Card} from '../../shared/card.model';
import {ScoreService} from '../../shared/score.service';
import {ConnectService} from '../../shared/connect.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() player: PlayerModel;

  isActive: boolean;
  cards: Card[] = [];
  score = 0;

  constructor(private connectService: ConnectService,
              private scoreServce: ScoreService) {
    console.log(this.player);
  }

  drawCard() {
    let cardsToDraw = 1;
    if (this.cards.length === 0) {
      cardsToDraw = 2;
    }
    this.connectService.drawCard(cardsToDraw).subscribe(newCards => {
      for (const newCard of newCards) {
        this.cards.push(newCard);
      }
      this.score = this.scoreServce.sumScore(this.cards);
      this.player.isPlaying = !this.scoreServce.checkIfEndGame(this.score, this.cards.length);
    });
  }

  ngOnInit(): void {
    console.log(this.player);

    if (this.player.isFirstPlayer === true) {
      this.connectService.startGame().subscribe(cards => {
          this.cards = cards;
          this.score = this.scoreServce.sumScore(this.cards);
          this.player.isPlaying = !this.scoreServce.checkIfEndGame(this.score, this.cards.length)
          console.log(this.cards);
        }
      );
    }
  }

}
