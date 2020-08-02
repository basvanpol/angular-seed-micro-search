import { IBook } from '../book';
export interface IBooksState {
    books: IBook[];
    selectedBook: IBook;
    isLoading: boolean;
    searchNoResults: boolean;
    errorMessage?: string;
}

export const initialBooksState: IBooksState = {
    books: null,
    isLoading: false,
    searchNoResults: false,
    selectedBook: null
};
