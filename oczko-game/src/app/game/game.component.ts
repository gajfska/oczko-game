import { Component, OnInit } from '@angular/core';
import {SessionService} from '../shared/session.service';
import {PlayerModel} from '../shared/player.model';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor(private sessionService: SessionService) {
    console.log(this.sessionService.players());
    this.arrayOfPlayers = this.sessionService.players();
  }

  currentActivePlayerIndex = 0;

  arrayOfPlayers: PlayerModel[] = [];

  beActive() {
    if ( this.arrayOfPlayers.filter(player => player.isPlaying ).length === 0) {
      return;
    }
    this.arrayOfPlayers[this.currentActivePlayerIndex].isActive = false;
    this.currentActivePlayerIndex = this.getNextPlayingPlayerIndex(this.currentActivePlayerIndex);
    console.log('curr ' + this.currentActivePlayerIndex);
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
    let nextPlayerIndex = this.getNextPlayerIndex(index);
    if (this.arrayOfPlayers[nextPlayerIndex].isPlaying === true) {
      return nextPlayerIndex;
    } else {
      return this.getNextPlayingPlayerIndex(nextPlayerIndex);
    }
  }

  ngOnInit(): void {
  }

}
