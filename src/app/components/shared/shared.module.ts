import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchBooksComponent } from './search/search-books/search-books.component';


@NgModule({
  declarations: [SearchComponent, SearchBooksComponent],
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [SearchComponent, SearchBooksComponent]
})
export class SharedModule { }
