import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { appReducer } from './app/app.reducer';
import { BooksStoreModule } from './books/books-store.module';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([]) ,
    BooksStoreModule,
  ],
  declarations: []
})
export class RootStoreModule {
  static forRoot(): ModuleWithProviders<any> {
    return {
      ngModule: RootStoreModule,
      providers: []
    };
  }
}
