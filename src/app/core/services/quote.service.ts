import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Quote, QuoteResponse } from '../types/quote.type';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor(private httpService: HttpService) { }

  private quotes = new BehaviorSubject<Quote[] | null>(null);
  quotes$ = this.quotes.asObservable();

  getAllQuotes(): void {
    this.httpService.getAllQuotes().subscribe((response: QuoteResponse) => {
      this.quotes.next(response.quotes);
    });
  }

  getAllQuotesToComponent(): Observable<QuoteResponse> {
    return this.httpService.getAllQuotes();
  }


}
