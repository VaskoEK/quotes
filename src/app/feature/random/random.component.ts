import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { RandomService } from 'src/app/core/services/random.service';
import { Quote } from 'src/app/core/types/quote.type';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss']
})
export class RandomComponent {

  quote: Quote = {
    id: 0,
    quote: '',
    author: ''
  };

  errorMsg: string = '';

  constructor(private randomService: RandomService) { }

  ngOnInit(): void {
    this.randomService.getARandomQuoteToComponent().subscribe({
      next: (res: Quote) => {
        this.quote = res;
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
        
        this.errorMsg = err.message;
      }
    })
  }

}
