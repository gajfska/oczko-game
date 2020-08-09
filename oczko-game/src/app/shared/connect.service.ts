import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {flatMap, map, tap} from 'rxjs/operators';
import {Card, RootObject, ShuffleResponse} from './card.model';

@Injectable({providedIn: 'root'})

export class ConnectService {

  constructor(private http: HttpClient) {}

  deckId: string;


  startGame(): Observable<Card[]> {
    return this.http.get<ShuffleResponse>('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
      .pipe(
        map(cards => {
          return cards.deck_id;
        }),
        tap(id => {
          this.deckId = id;
        }),
        flatMap(id => {
          return this.fetchCard(id, 2);
        }));
  }

  private fetchCard(deckId: string, count: number): Observable<Card[]>{
    return this.http.get<RootObject>(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${count}`)
      .pipe(map(response => {
        return response.cards;
      }));
  }

  drawCard(cards: number): Observable<Card[]>{
    return this.fetchCard(this.deckId, cards);
  }

}
