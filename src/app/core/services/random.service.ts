import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { Quote } from '../types/quote.type';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor(private httpService: HttpService) { }

  private quote = new BehaviorSubject<Quote | null>(null);
  quote$ = this.quote.asObservable();

  getARandomQuote(): void {
    this.httpService.getARandomQuote().subscribe((response: Quote) => {
      this.quote.next(response);
    });
  }

  getARandomQuoteToComponent(): Observable<Quote> {
    return this.httpService.getARandomQuote();
  }
}
