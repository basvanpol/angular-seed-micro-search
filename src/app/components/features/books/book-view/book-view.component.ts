import { IBook } from './../../../../models/book';
import { IBooksState } from './../../../../models/state/books.state';
import { BooksFacade } from './../../../../store/books/facade/books.facade';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookViewComponent implements AfterViewInit {

  public selectedBookId: string;
  public selectedBookData: IBook;
  public isLoading = false;
  public bookTitle: string;
  public bookAuthor: string;
  public bookDescription: string;
  public bookImageUrl: string;

  constructor(private booksFacade: BooksFacade, private route: ActivatedRoute, private cd: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.route.params
      .pipe(untilDestroyed(this))
      .subscribe(
        (params: Params) => {
          this.selectedBookId = params.id;
          this.retrieveSelectedBookData();
        }
      );

    this.booksFacade.bookState$.pipe(untilDestroyed(this)).subscribe((bookState: IBooksState) => {
      this.selectedBookData = bookState.selectedBook;
      if (this.selectedBookData) {
        this.bookTitle = (!!this.selectedBookData.title) ? this.selectedBookData.title : '';
        this.bookDescription = (!!this.selectedBookData.description) ? this.selectedBookData.description : '';
        this.bookImageUrl = (!!this.selectedBookData.imageUrl) ? this.selectedBookData.imageUrl : '';
        this.bookAuthor = (!!this.selectedBookData.author) ? this.selectedBookData.author : '';
        this.cd.detectChanges();
      }
      this.isLoading = bookState.isLoading;
    });
  }

  private retrieveSelectedBookData() {
    this.booksFacade.getBookData(this.selectedBookId);
  }



}
