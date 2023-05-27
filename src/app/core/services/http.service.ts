import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { QuoteResponse } from '../types/quote.type';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getAllQuotes(): Observable<QuoteResponse> {
    return this.getRequest(environment.api.quotes).pipe(
      catchError(
        (err) => {
          console.log(err);
          return throwError(() => "HIBA");
        }
      )
    );
  }


  private getRequest(path: string): Observable<any> {
    return this.http.get(environment.api.apiBaseUrl + path).pipe(
      catchError((err) => {

        console.log("err captured in service");
        console.log(err);
        
        return throwError(() => "HIBA");
      })
    );
  }
}
