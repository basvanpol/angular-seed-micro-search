import { IBook } from '../book';
export interface IBooksState {
    books: IBook[];
    isLoading: boolean;
    searchNoResults: boolean;
    errorMessage?: string;
}

export const initialBooksState: IBooksState = {
    books: [],
    isLoading: false,
    searchNoResults: false,
};
