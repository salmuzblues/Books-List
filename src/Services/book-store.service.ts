import { Injectable } from "@angular/core";

import  { Book }  from '../Classes/book';
import  { BOOKS } from "../Classes/data-books";

@Injectable() // emit metaData upon our service
export class BookStoreService {

  // create an object of class Book
  booksList : Book [] = BOOKS;

 /*  HERE WE ARE CREATING ALL THE METHODS that we can use */

// Getter all booksList
 getBooks() {
  return this.booksList;
}
// Getter return  jus book selected
  getBook( isbn: number){
   var selectedBook = this.booksList.filter(book => book.isbn  === isbn);
   return selectedBook[0];
  }
// delete book from booksList

  deleteBook( isbn: number){
   // we filter the book or we take off the book  If book.isbn is different isbn then we add the rest of the books.
   this.booksList = this.booksList.filter(book => book.isbn !== isbn);
   return this.booksList;
  }
}
