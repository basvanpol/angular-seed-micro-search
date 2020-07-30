import { initialBooksState, IBooksState } from './../../../models/state/books.state';
import * as FromBooks from '../actions/books.actions';

export const booksFeatureKey = 'books';


export function booksReducer (state = initialBooksState, action: FromBooks.BooksActions): IBooksState {
  switch (action.type) {
      default:
          return state;
  }
}

