import { booksReducer } from './reducers/books.reducer';
import { BooksFacade } from './facade/books.facade';
import { BooksEffects } from './effects/books.effects';
import { initialBooksState } from '../../models/state/books.state';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
  CommonModule,
  StoreModule.forFeature('booksState', booksReducer, {
  initialState: initialBooksState
  }),
  EffectsModule.forFeature([BooksEffects])
  ],
  providers: [BooksFacade]
  })
  export class BooksStoreModule {}
