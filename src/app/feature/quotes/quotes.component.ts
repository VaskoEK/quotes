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

  private _quotes: Quote[] = [];
  displayedQuotes: Quote[] = [];
  
  errorMsg: string = '';

  searchedString: string = "";

  message: string = "";

  constructor(private quoteService: QuoteService) { }

  ngOnInit(): void {
    
    this.quoteService.getAllQuotesToComponent().subscribe({
      next: (res: QuoteResponse) => {
        this._quotes = res.quotes;
        this.setQuotesToDisplay(this._quotes);

      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        this.errorMsg = err.message;
      }
    })
  }

  // ha az idézet szövegében szerepel a searchedString, visszaadja azt a Quote-ot
  // https://stackoverflow.com/questions/49777455/what-is-the-best-ng-change-ngchange-event-for-angular-5-to-fire-a-custom-functio
  searching(searchedString: string) {
    if (this.searchedString.length >= 3) {
      let match: Quote[] = this._quotes.filter(item => item.quote.match(searchedString));
      if (match.length > 0) {
        
        this.setQuotesToDisplay(match);
      }
      else {
        this.setQuotesToDisplay([]);
        this.message = "Nincs találat.";
        
      } 
    }
  }
  private setQuotesToDisplay(quotes: Quote[]) {
    this.displayedQuotes = quotes;
  }

}
