import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { QuoteService } from 'src/app/core/services/quote.service';
import { Quote, QuoteResponse } from 'src/app/core/types/quote.type';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[] = [];
  errorMsg: string = '';

  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void {
    this.quoteService.getAllQuotesToComponent().subscribe({
      next: (res: QuoteResponse) => {
        this.quotes = res.quotes;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        
        this.errorMsg = err.message;
      }
    })
  }
}
