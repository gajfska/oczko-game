import {TestBed} from '@angular/core/testing';
import {ScoreService} from '../score.service';
import {Card} from '../card.model';
import {GameResult} from '../game-result.model';

describe('ScoreService', () => {
  let scoreService: ScoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        providers: [ScoreService]
      }
    );
    scoreService = TestBed.get(ScoreService);
  });

  it('extractValue should return valid value', () => {
    expect(scoreService.extractValue('QUEEN')).toBe(3);
  });

  it('sumScore should return valid sum for multiple cards', () => {
    const firstMockCard = new Card('6');
    const secondMockCard = new Card('10');
    const thirdMockCard = new Card('ACE');

    expect(scoreService.sumScore([firstMockCard, secondMockCard, thirdMockCard])).toBe(27);
    expect(scoreService.sumScore([firstMockCard, thirdMockCard])).toBe(17);
    expect(scoreService.sumScore([thirdMockCard, thirdMockCard])).toBe(22);
  });

  it('checkGameResult should return win if there were two aces', () => {
    const scoreForTwoAces = 22;
    expect(scoreService.checkGameResult(scoreForTwoAces, 2)).toBe(GameResult.won);
  });

  it('checkGameResult should return lost if there score is equal as for two aces but more cards were played', () => {
    const scoreForTwoAces = 22;
    expect(scoreService.checkGameResult(scoreForTwoAces, 4)).toBe(GameResult.lost);
  });

  it('checkGameResult should return lost if player got more than 22 points regardless of cards count', () => {
    expect(scoreService.checkGameResult(33, 4)).toBe(GameResult.lost);
    expect(scoreService.checkGameResult(33, 3)).toBe(GameResult.lost);
  });

  it('checkGameResult should return inProgress if player got less than 21 points regardless of cards count', () => {
    expect(scoreService.checkGameResult(11, 4)).toBe(GameResult.inProgress);
    expect(scoreService.checkGameResult(12, 3)).toBe(GameResult.inProgress);
    expect(scoreService.checkGameResult(18, 7)).toBe(GameResult.inProgress);
  });

  it('checkGameResult should return won if player got 21 points regardless of cards count', () => {
    expect(scoreService.checkGameResult(21, 4)).toBe(GameResult.won);
    expect(scoreService.checkGameResult(21, 3)).toBe(GameResult.won);
    expect(scoreService.checkGameResult(21, 7)).toBe(GameResult.won);
  });
});
