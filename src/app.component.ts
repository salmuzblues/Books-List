import {Component, OnInit} from '@angular/core';
import  { Book }  from './Classes/book';
import  { BOOKS } from "./Classes/data-books";
import {BookStoreService} from "./Services/book-store.service";


@Component({
  selector: 'books-list',
  templateUrl:'src/app.component.html',
  providers:[BookStoreService]
})
export class AppComponent implements OnInit{
// create an object Book []
// here we are storing all data of books  inside to booksList of class AppComponent
 booksList : Book [] = BOOKS;
 selectedBook: Book; // this is because we are working with the class Book then it contains isbn:number

  // the working of constructor is for building and initializing object
  // Inyeccion de dependencias en el que se suministran objetos a una clase en lugar de ser la propia clase la que cree el objeto.
constructor ( private bookStoreService: BookStoreService){

}

// the method ngOnInit is for retrieving data
  ngOnInit(){
   this.getBooksList();
  }

  getBooksList(){
   this.booksList = this.bookStoreService.getBooks();
  }

  getBookDetails(isbn: number){
   return this.bookStoreService.getBook(isbn);
  }
  /*
  // create a method just retrieving all data
  getBookDetails(isbn: number)
  {
    // create a variable selectBook  and  inside of the method filter we'll create a var book
    var selectedBook = this.booksList.filter(book => book.isbn === isbn);

     return this.selectedBook = selectedBook [0];
  }
*/
  deleteBook(isbn:number){
    return this.bookStoreService.deleteBook(isbn);
  }

  /*
  // this Method is going to delete all information of book from booksList with number Isbn
  // this parameter isbn is form the actual book.
  deleteBook(isbn:number)
  {
   this.selectedBook=null;

   this.booksList = this.booksList.filter(book => book.isbn !== isbn);

  } */
}
