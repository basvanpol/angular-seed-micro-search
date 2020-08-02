import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { Routes, RouterModule } from '@angular/router';
import { BookViewComponent } from './book-view/book-view.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [{ path: ':id', component: BookViewComponent }]
  }
];

@NgModule({
  declarations: [BooksComponent, BookViewComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class BooksModule { }
