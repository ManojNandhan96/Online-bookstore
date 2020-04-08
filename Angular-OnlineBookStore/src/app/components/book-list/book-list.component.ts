import { Component, OnInit } from '@angular/core';
import { Book } from '../../common-class/book';
import { BookService } from 'src/app/services/book.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-list',
  // templateUrl: './book-list.component.html',
  templateUrl: './book-grid.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] ;

  constructor(private _bookService:BookService,
              private _activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe( ()=> this.listBooks() );
    console.log("Booklist called");

  }


  listBooks(){
    if(this._activatedRoute.snapshot.paramMap.has('id')){
      const a: number=+this._activatedRoute.snapshot.paramMap.get('id');
      this._bookService.getCategory(a).subscribe(data=>{this.books=data});

    } else if (this._activatedRoute.snapshot.paramMap.has('keyword')){
      const a: string=this._activatedRoute.snapshot.paramMap.get('keyword');
      this._bookService.searchByKeyword(a).subscribe(data => { this.books =data});

    } else {
         this._bookService.getBooks().subscribe(data=>{this.books=data});
    }

  }


}
