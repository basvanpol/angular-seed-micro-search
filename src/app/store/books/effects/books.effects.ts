import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, Effect } from '@ngrx/effects';

import { concatMap, switchMap, map, catchError } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';

import * as BooksActions from '../actions/books.actions';


@Injectable()
export class BooksEffects {

  constructor(
    private actions$: Actions
  ) {}

  // @Effect()
  // retrievePerformanceData$ = this.actions$.pipe(
  //   ofType(BooksActions.SEARCH_BOOKS),
  //   switchMap((action: BooksActions.SearchBooks) => {
  //     return this.booksService
  //       .searchBooks(<string>action.payload)
  //       .pipe(
  //         map((res: {}[]): any => {
  //           if (res) {
  //             const performanceResultObject: IPerformanceDataResult = {
  //               performanceData: res,
  //               date: action.payload.date,
  //               clientEntities: action.payload.clientEntities
  //             };
  //             return new PerformanceActions.SetPerformanceData(
  //               performanceResultObject
  //             );
  //           }
  //         }),
  //         catchError(err => {
  //           const errorMessage =
  //             "Unfortunately Performance data couldn't be loaded. Apologies for the inconvenience.";
  //           return of(
  //             new PerformanceActions.PerformanceDataError(errorMessage)
  //           );
  //         })
  //       );
  //   })
  // );


}
