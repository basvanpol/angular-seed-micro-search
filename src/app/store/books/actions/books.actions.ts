import { Action } from '@ngrx/store';

export const SEARCH_BOOKS = 'SEARCH_BOOKS';

export class SearchBooks implements Action {
    readonly type = SEARCH_BOOKS;
    constructor(public payload: string) { }
}

export type BooksActions = SearchBooks;



