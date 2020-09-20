import {GameResult} from './game-result.model';

export class PlayerModel {
    isActive: boolean;
    name: string;

    isPlaying = true;
    score = 0;
    gameResult = GameResult.inProgress;

    constructor(state: boolean, name: string) {
        this.isActive = state;
        this.name = name;
    }

    resetPlayer() {
        this.isPlaying = true;
        this.score = 0;
        this.gameResult = GameResult.inProgress;
    }
}
