//-----Implement without Caching Strategies----------------

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {
//   constructor(private http: HttpClient) {}

//   getData(url: string): Observable<any> {
//     console.log("Fetching new data (No Caching)");
//     return this.http.get(url); // Always fetch from the API
//   }
// }


//-----Implement Caching Strategies----------------

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private cache: Map<string, any> = new Map();

  constructor(private http: HttpClient) {}

  getData(url: string): Observable<any> {
    if (this.cache.has(url)) {
      console.log("Returning cached data");
      return of(this.cache.get(url)); 
    } else {
      return this.http.get(url).pipe(
        tap(data => {
          console.log("Fetching new data and caching it");
          this.cache.set(url, data);
        })
      );
    }
  }
}
