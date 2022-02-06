import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PunkService {
  constructor(public httpClient: HttpClient) {}

  getAllBeers(): Observable<any[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.httpClient
      .get<any>('https://api.punkapi.com/v2/beers', { headers })
      .pipe(
        catchError((error: any) => throwError(() => error)),
        map((beers) => {
          return beers;
        })
      );
  }

  getPaginationBeers(page: string): Observable<any[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let params = new HttpParams().set('page', page);
    return this.httpClient
      .get<any>('https://api.punkapi.com/v2/beers', { headers, params })
      .pipe(
        catchError((error: any) => throwError(() => error)),
        map((beers) => {
          return beers;
        })
      );
  }

  search(query: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    let params = new HttpParams().set('beer_name', query);
    return this.httpClient
      .get<any>('https://api.punkapi.com/v2/beers', { headers, params })
      .pipe(
        catchError((error: any) => throwError(() => error)),
        map((search) => {
          return search;
        })
      );
  }

  getProductDetails(id: string): Observable<any[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.httpClient
      .get<any>('https://api.punkapi.com/v2/beers' + id, { headers })
      .pipe(
        catchError((error: any) => throwError(() => error)),
        map((beer) => {
          return beer;
        })
      );
  }
}
