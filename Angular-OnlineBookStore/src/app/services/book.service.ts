import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../common-class/book';
import { map } from 'rxjs/operators';
import { BookCategory } from '../common-class/book-category';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseUrl = 'http://localhost:8080/api/v1';
  booklist = `${this.baseUrl}/books`;
  categoryId = `${this.baseUrl}/book-category`;

  constructor(private httpClient: HttpClient) { }

  getCategory(idValue: number): Observable<Book[]> {
    return this.httpClient.get<GetResponseBooks>(this.booklist + '/search/categoryid?id=' + idValue).pipe(
          map(response => response._embedded.books)
      );
  }

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<GetResponseBooks>(this.booklist).pipe(
          map(response => response._embedded.books)
      );
  }

  categoryList(): Observable<BookCategory[]> {
    return this.httpClient.get<GetResponseBookCategory>(this.categoryId).pipe(
          map(response => response._embedded.bokCategory)
      );
  }

}


interface GetResponseBooks {
   _embedded : {
    books : Book[];
  }
}


interface GetResponseBookCategory {
  _embedded : {
   bokCategory : BookCategory[];
 }
}