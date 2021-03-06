import { IBooksState } from './../../../models/state/books.state';
import { IAppState } from './../../../models/state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBooks from '../reducers/books.reducer';

export const getBooksState = createFeatureSelector<IAppState, IBooksState>('booksState');


export const getBooks = createSelector(
  getBooksState,
  (state: IBooksState) => state.books
);

export const getSelectedBook = createSelector(
  getBooksState,
  (state: IBooksState) => state.selectedBook
);


