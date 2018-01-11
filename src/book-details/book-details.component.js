"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var book_1 = require("../Classes/book");
var BookDetailsComponent = (function () {
    function BookDetailsComponent() {
        // a event that triggers outside ( BookDetailsComponent is child) [ trigger = desencadenar ]
        this.onDelete = new core_1.EventEmitter();
    }
    // Active the event using the method emit()
    BookDetailsComponent.prototype.deleteBook = function () {
        this.onDelete.emit(this.book.isbn);
    };
    return BookDetailsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", book_1.Book)
], BookDetailsComponent.prototype, "book", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], BookDetailsComponent.prototype, "onDelete", void 0);
BookDetailsComponent = __decorate([
    core_1.Component({
        selector: 'book-details',
        templateUrl: 'src/book-details/book-details.component.html'
    })
], BookDetailsComponent);
exports.BookDetailsComponent = BookDetailsComponent;
//# sourceMappingURL=book-details.component.js.map