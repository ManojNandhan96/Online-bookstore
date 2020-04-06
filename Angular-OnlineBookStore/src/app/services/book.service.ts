import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../common-class/book';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseUrl= "http://localhost:8080/api/v1/books";

  constructor(private httpClient: HttpClient) { }

  
  getCategory(idValue: number): Observable<Book[]> {
    return this.httpClient.get<GetResponseBooks>(this.baseUrl + '/search/categoryid?id=' + idValue).pipe(
          map(response => response._embedded.books)
      );
  }

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<GetResponseBooks>(this.baseUrl).pipe(
          map(response => response._embedded.books)
      );
  }
}


interface GetResponseBooks {
   _embedded : {
    books : Book[];
  }
}