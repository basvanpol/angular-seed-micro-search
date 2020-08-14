import { initialBooksState, IBooksState } from './../../../models/state/books.state';
import * as fromBooks from '../actions/books.actions';

export const booksFeatureKey = 'books';


export function booksReducer(state = initialBooksState, action: fromBooks.BooksActions): IBooksState {
  switch (action.type) {
    case fromBooks.SEARCH_BOOKS:
      return {
        ...state,
        isLoading: true,
        searchNoResults: false,
      };
    case fromBooks.SEARCH_BOOKS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        books: action.payload,
        searchNoResults: false
      };
    case fromBooks.SEARCH_BOOKS_FAIL:
      return {
        ...state,
        books: [],
        isLoading: false,
        errorMessage: action.payload,
        searchNoResults: true,
      };
    case fromBooks.GET_BOOK_DATA:
      return {
        ...state,
        isLoading: true,
        selectedBook: null,
        books: []
      };
    case fromBooks.GET_BOOK_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        selectedBook: action.payload
      };
    case fromBooks.GET_BOOK_DATA_FAIL:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
        selectedBook: null
      };
    case fromBooks.SEARCH_BOOKS_RESET:
      return {
        ...state,
        books: [],
        isLoading: false
      };
    default:
      return state;
  }
}

