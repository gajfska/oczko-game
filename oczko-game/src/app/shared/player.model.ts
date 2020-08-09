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
}
