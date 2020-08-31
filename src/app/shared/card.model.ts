export class Card {
  image: string;
  value: string;
  code: string;

  constructor(value: string) {
    this.value = value;
  }
}

export interface RootObject {
  success: boolean;
  cards: Card[];
  deck_id: string;
  remaining: number;
}

export interface ShuffleResponse {
  success: boolean;
  deck_id: string;
  shuffled: boolean;
  remaining: number;
}
