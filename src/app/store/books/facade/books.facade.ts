import { IAppState } from 'src/app/models/state/app.state';
import { getBooks, getBooksState, getSelectedBook } from './../selectors/books.selectors';
import * as BooksActions from './../actions/books.actions';
import { Injectable } from '@angular/core';
import { Store, select, createSelector } from '@ngrx/store';
@Injectable()
export class BooksFacade {

  constructor(private store: Store<IAppState>) { }

  public searchBooksResult$ = this.store.pipe(
    select(getBooks)
  );

  public bookState$ = this.store.pipe(
    select(getBooksState)
  );

  public selectedBook$ = this.store.pipe(
    select(getSelectedBook)
  );

  public searchBooks(query: string) {
    this.store.dispatch(new BooksActions.SearchBooks(query));
  }

  public getBookData(selectedBookId: string) {
    this.store.dispatch(new BooksActions.GetBookData(selectedBookId));
  }

}
