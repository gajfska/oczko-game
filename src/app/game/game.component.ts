import {Component} from '@angular/core';
import {SessionService} from '../shared/session.service';
import {PlayerModel} from '../shared/player.model';
import {ConnectService} from '../shared/connect.service';
import {GameResult} from '../shared/game-result.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  currentActivePlayerIndex = 0;
  arrayOfPlayers: PlayerModel[] = [];

  constructor(private sessionService: SessionService, private apiService: ConnectService) {
    apiService.fetchDeckId().subscribe(deckId => {
      apiService.deckId = deckId;
      this.arrayOfPlayers = this.sessionService.players();
    });
  }

  receiveGameResult() {
    this.activateNextPlayer();
  }

  activateNextPlayer() {
    this.arrayOfPlayers[this.currentActivePlayerIndex].isActive = false;
    if ( this.arrayOfPlayers.filter(player => player.isPlaying ).length === 0) {
      this.checkGameResult();
      return;
    }
    this.currentActivePlayerIndex = this.getNextPlayingPlayerIndex(this.currentActivePlayerIndex);
    this.arrayOfPlayers[this.currentActivePlayerIndex].isActive = true;
  }

  getNextPlayerIndex(index: number): number {
    if (index === this.arrayOfPlayers.length - 1) {
      return 0;
    } else {
      return index + 1;
    }
  }

  getNextPlayingPlayerIndex(index: number): number {
    const nextPlayerIndex = this.getNextPlayerIndex(index);
    if (this.arrayOfPlayers[nextPlayerIndex].isPlaying === true) {
      return nextPlayerIndex;
    } else {
      return this.getNextPlayingPlayerIndex(nextPlayerIndex);
    }
  }

  checkGameResult() {
      const playerThatWon = this.arrayOfPlayers.find( player => player.gameResult === GameResult.won);
      const playersWhoPassed = this.arrayOfPlayers.filter(player => player.gameResult === GameResult.pass );

      if (playerThatWon !== undefined) {
        alert(playerThatWon.name + ' won!');
      } else if (playersWhoPassed.length === 0) {
        alert("Everyone lost!");
      } else {
        let maxScore = 0;
        let winnerIndex = 0;
        for(let i = 0; i<playersWhoPassed.length; i++) {
          if (playersWhoPassed[i].score > maxScore) {
              winnerIndex = i;
              maxScore = playersWhoPassed[i].score;
          }
        }
        alert(playersWhoPassed[winnerIndex].name + ' won!');

      }



  }

}
