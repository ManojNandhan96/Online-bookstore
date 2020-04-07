import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book.service';
import { BookCategory } from 'src/app/common-class/book-category';

@Component({
  selector: 'app-book-category',
  templateUrl: './book-category.component.html',
  styleUrls: ['./book-category.component.css']
})
export class BookCategoryComponent implements OnInit {
categoryList:BookCategory[];
  constructor(private _bookCategory: BookService) { }

  ngOnInit() {
    this._bookCategory.categoryList().subscribe(data => {console.log(data);
      this.categoryList=data;});
  }

}
