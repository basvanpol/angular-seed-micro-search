import { IBook } from './../../../models/book';
import { BooksHttpService } from './../../../services/http/books.http.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';

import { concatMap, switchMap, map, catchError } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as BooksActions from '../actions/books.actions';


@Injectable()
export class BooksEffects {

  constructor(
    private actions$: Actions,
    private booksHttpService: BooksHttpService
  ) {}

  @Effect()
  searchBooks$ = this.actions$.pipe(
    ofType(BooksActions.SEARCH_BOOKS),
    switchMap((action: BooksActions.SearchBooks) => {
      return this.booksHttpService
        .searchBooks(<string>action.payload)
        .pipe(
          map((res: IBook[]): any => {
            if (res) {
              return new BooksActions.SearchBooksSuccess(
                res
              );
            }
          }),
          catchError(err => {
            const errorMessage =
              "Unfortunately books search data couldn't be loaded";
            return of(
              new BooksActions.SearchBooksFail(errorMessage)
            );
          })
        );
    })
  );


}
