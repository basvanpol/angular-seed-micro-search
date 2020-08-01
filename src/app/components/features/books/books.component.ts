import { IBooksState } from './../../../models/state/books.state';
import { BooksFacade } from './../../../store/books/facade/books.facade';
import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  public searchResultOptions: IBook[];
  public showSearchNoResults: boolean;
  public searchInProgress: boolean;

  constructor(private booksFacade: BooksFacade) { }

  ngOnInit(): void {
     this.booksFacade.searchBooksResult$.subscribe((books: IBook[]) => {
      this.searchResultOptions = (books && books.length > 0) ? books : [];
     });
     this.booksFacade.bookState$.subscribe((bookState: IBooksState) => {
       this.showSearchNoResults = bookState.searchNoResults;
       this.searchInProgress = bookState.isLoading;
     });
  }


  public onSearchQuery(query: string) {
    this.booksFacade.searchBooks(query);
  }

}
