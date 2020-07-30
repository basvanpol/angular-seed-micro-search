import { booksReducer } from './../books/reducers/books.reducer';
import { ActionReducerMap, Action } from '@ngrx/store';
import { IAppState } from 'src/app/models/state/app.state';


export type Reducer<T> = (state: T, action: Action) => T;

export const appReducer: ActionReducerMap<Reducer<IAppState>> = {
  books: booksReducer
};
