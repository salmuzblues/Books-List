import {Component, Input} from "@angular/core";
import { Book } from "../Classes/book";

@Component({

  selector: 'book-details',
  templateUrl: 'src/book-details/book-details.component.html'
})

export class BookDetailsComponent {
// var
 /*  the property book of the class BookDetailsComponent is not allowed to be bound with the selector,
     We need to declare as a property input "@Input()" then it will work*/
  @Input() book: Book;
}
