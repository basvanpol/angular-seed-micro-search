import { IBook } from './../../../models/book';
import { Action } from '@ngrx/store';

export const SEARCH_BOOKS = 'SEARCH_BOOKS';
export const SEARCH_BOOKS_SUCCES = 'SEARCH_BOOKS_SUCCES';
export const SEARCH_BOOKS_FAIL = 'SEARCH_BOOKS_FAIL';

export class SearchBooks implements Action {
    readonly type = SEARCH_BOOKS;
    constructor(public payload: string) { }
}
export class SearchBooksSuccess implements Action {
    readonly type = SEARCH_BOOKS_SUCCES;
    constructor(public payload: IBook[]) { }
}
export class SearchBooksFail implements Action {
    readonly type = SEARCH_BOOKS_FAIL;
    constructor(public payload: string) { }
}

export type BooksActions = SearchBooks | SearchBooksSuccess | SearchBooksFail;



