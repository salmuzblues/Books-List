"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var data_books_1 = require("./Classes/data-books");
var AppComponent = (function () {
    function AppComponent() {
        // create an object Book []
        // here we are storing all data of books  inside to booksList of class AppComponent
        this.booksList = data_books_1.BOOKS;
    }
    // create a method just retrieving all data
    AppComponent.prototype.getBookDetails = function (isbn) {
        // create a variable selectBook  and  inside of the method filter we'll create a var book
        var selectedBook = this.booksList.filter(function (book) { return book.isbn === isbn; });
        return this.selectedBook = selectedBook[0];
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'books-list',
        templateUrl: 'src/app.component.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map