export class PlayerModel {
  isActive: boolean;
  name: string;
  isPlaying: boolean;
  isFirstPlayer: boolean;

  constructor(state: boolean, name: string, isPlaying: boolean, isFirstPlayer: boolean) {
    this.isActive = state;
    this.name = name;
    this.isPlaying = isPlaying;
    this.isFirstPlayer = isFirstPlayer;
  }
}
