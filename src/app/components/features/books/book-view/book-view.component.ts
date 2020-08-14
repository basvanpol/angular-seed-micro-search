import { IBook } from './../../../../models/book';
import { BooksFacade } from './../../../../store/books/facade/books.facade';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-book-view',
  templateUrl: './book-view.component.html',
  styleUrls: ['./book-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookViewComponent implements AfterViewInit {

  public selectedBook$: Observable<IBook> = this.booksFacade.selectedBook$;
  public selectedBookId: string;

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
  }

  private retrieveSelectedBookData() {
    this.booksFacade.getBookData(this.selectedBookId);
  }



}
