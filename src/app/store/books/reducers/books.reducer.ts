import { initialBooksState, IBooksState } from './../../../models/state/books.state';
import * as fromBooks from '../actions/books.actions';

export const booksFeatureKey = 'books';


export function booksReducer(state = initialBooksState, action: fromBooks.BooksActions): IBooksState {
  switch (action.type) {
    case fromBooks.SEARCH_BOOKS:
      return {
        ...state,
        isLoading: true
      };
    case fromBooks.SEARCH_BOOKS_SUCCES:
      return {
        ...state,
        isLoading: false,
        books: action.payload
      };
    case fromBooks.SEARCH_BOOKS_FAIL:
      return {
        ...state,
        books: null,
        isLoading: false,
        errorMessage: action.payload,
        searchNoResults: true
      };
    default:
      return state;
  }
}

