import { IBooksState, initialBooksState } from './books.state';


export interface IAppState {
  booksState: IBooksState;
}

export const initialAppState: IAppState = {
  booksState: initialBooksState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
