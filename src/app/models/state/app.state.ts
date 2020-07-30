import { IBooksState, initialBooksState } from './books.state';


export interface IAppState {
  books: IBooksState;
}

export const initialAppState: IAppState = {
  books: initialBooksState,
};

export function getInitialState(): IAppState {
  return initialAppState;
}
