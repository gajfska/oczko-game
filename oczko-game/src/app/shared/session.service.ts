import {Injectable} from '@angular/core';
import {PlayerModel} from './player.model';

@Injectable({providedIn: 'root'})


export class SessionService {

  arrayOfPlayers = [
    new PlayerModel( true, 'Kamil', true, true),
    new PlayerModel( false, 'Werka', true, false)
  ];

  singlePlayer = [new PlayerModel( true, 'Kamil', true, true)];

  isMultiplayerGame = false;

  players(): PlayerModel[] {
    if (this.isMultiplayerGame){
      return this.arrayOfPlayers;
    } else {
      return this.singlePlayer;
    }
  }
}
