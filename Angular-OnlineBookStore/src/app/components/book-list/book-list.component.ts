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
    this._activatedRoute.paramMap.subscribe( ()=>       this.listBooks() );
  }


  listBooks(){
    if(this._activatedRoute.snapshot.paramMap.has('id')){
      let a:number=+this._activatedRoute.snapshot.paramMap.get('id');
      this._bookService.getCategory(a).subscribe(data=>{this.books=data});

    }else{
         this._bookService.getBooks().subscribe(data=>{this.books=data});
    }

  }


}
