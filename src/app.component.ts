import { Component } from '@angular/core';
import  { Book }  from './Classes/book';
import  { BOOKS } from "./Classes/data-books";


@Component({
  selector: 'books-list',
  templateUrl:'src/app.component.html'
})
export class AppComponent {
// create an object Book []
// here we are storing all data of books  inside to booksList of class AppComponent
 booksList : Book [] = BOOKS;
 selectedBook: Book; // this is because we are working with the class Book then it contains isbn:number
 // create a method just retrieving all data
  getBookDetails(isbn: number)
  {
    // create a variable selectBook  and  inside of the method filter we'll create a var book
    var selectedBook = this.booksList.filter(book => book.isbn === isbn);

     return this.selectedBook = selectedBook [0];
  }
}
