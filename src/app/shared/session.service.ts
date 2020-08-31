import {Injectable} from '@angular/core';
import {PlayerModel} from './player.model';

@Injectable({providedIn: 'root'})


export class SessionService {

    arrayOfPlayers = [
        new PlayerModel(true, 'Player 1'),
        new PlayerModel(false, 'Player 2')
    ];

    singlePlayer = [new PlayerModel(true, 'Player 1')];

    isMultiplayerGame = false;

    players(): PlayerModel[] {
        if (this.isMultiplayerGame) {
            return this.arrayOfPlayers;
        } else {
            return this.singlePlayer;
        }
    }
}
