import { IBook } from '../book';
export interface IBooksState {
    books: IBook[];
}

export const initialBooksState: IBooksState = {
    books: []
};
