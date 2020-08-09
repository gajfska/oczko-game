import {Injectable} from '@angular/core';
import {Card} from './card.model';

@Injectable({providedIn: 'root'})


export class ScoreService {
  private arrayApparentValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'JACK', 'QUEEN', 'KING', 'ACE'];
  private arrayCorrectValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 2, 3, 4, 11];


  extractValue(value: string): number {
    for (let i = 0; i < this.arrayApparentValues.length; i++) {
      if (value === this.arrayApparentValues[i]) {
        return this.arrayCorrectValues[i];
      }
    }
  }

  sumScore(cards: Card[]): number {
    let totalScore = 0;
    for (let i = 0; i < cards.length; i++) {
      totalScore = totalScore + this.extractValue(cards[i].value);
    }
    return totalScore;
  }

  checkIfEndGame(totalScore: number, cardsCount: number): boolean {
    if (totalScore === 22 && cardsCount === 2) {
      console.log('Wygraleś asami');
      return true;
    }
    if (totalScore >= 22) {
      console.log('przegrałes');
      return true;
    }
    if (totalScore === 21){
      console.log('wygrałeś');
      return true;
    }
    return false;
  }
}
