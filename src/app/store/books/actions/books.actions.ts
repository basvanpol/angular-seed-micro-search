import { IBook } from './../../../models/book';
import { Action } from '@ngrx/store';

export const SEARCH_BOOKS = 'SEARCH_BOOKS';
export const SEARCH_BOOKS_SUCCESS = 'SEARCH_BOOKS_SUCCESS';
export const SEARCH_BOOKS_FAIL = 'SEARCH_BOOKS_FAIL';
export const GET_BOOK_DATA = 'GET_BOOK_DATA';
export const GET_BOOK_DATA_SUCCESS = 'GET_BOOK_DATA_SUCCESS';
export const GET_BOOK_DATA_FAIL = 'GET_BOOK_DATA_FAIL';
export const SEARCH_BOOKS_RESET = 'SEARCH_BOOKS_RESET';

export class SearchBooks implements Action {
    readonly type = SEARCH_BOOKS;
    constructor(public payload: string) { }
}
export class SearchBooksSuccess implements Action {
    readonly type = SEARCH_BOOKS_SUCCESS;
    constructor(public payload: IBook[]) { }
}
export class SearchBooksFail implements Action {
    readonly type = SEARCH_BOOKS_FAIL;
    constructor(public payload: string) { }
}
export class GetBookData implements Action {
    readonly type = GET_BOOK_DATA;
    constructor(public payload: string) { }
}
export class GetBookDataSuccess implements Action {
    readonly type = GET_BOOK_DATA_SUCCESS;
    constructor(public payload: IBook) { }
}
export class GetBookDataFail implements Action {
    readonly type = GET_BOOK_DATA_FAIL;
    constructor(public payload: string) { }
}
export class SearchBooksReset implements Action {
  readonly type = SEARCH_BOOKS_RESET;
}

export type BooksActions = SearchBooks | SearchBooksSuccess | SearchBooksFail |
GetBookData | GetBookDataSuccess | GetBookDataFail | SearchBooksReset;



