import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseHttpService } from './base.http.service';

@Injectable({
  providedIn: 'root'
})
export class BooksHttpService extends BaseHttpService {
  constructor(private http: HttpClient) {
    super();
  }

  public searchBooks(query: string): Observable<any> {
    const url = `${environment.webApiUrl}/books?query=${query}`;
    return this.http.get(url, {
      observe: 'body',
      responseType: 'json',
      headers: this.getHttpHeaders()
    });
  }
  public getBookData(id: string): Observable<any> {
    const url = `${environment.webApiUrl}/books?id=${id}`;
    return this.http.get(url, {
      observe: 'body',
      responseType: 'json',
      headers: this.getHttpHeaders()
    });
  }
}
