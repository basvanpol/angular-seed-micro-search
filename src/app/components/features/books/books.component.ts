import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { IBooksState } from './../../../models/state/books.state';
import { BooksFacade } from './../../../store/books/facade/books.facade';
import { Component, OnInit, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { IBook } from 'src/app/models/book';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooksComponent implements AfterViewInit {

  public searchResultOptions: IBook[];
  public showSearchNoResults = false;
  public searchInProgress = false;

  constructor(private booksFacade: BooksFacade, private router: Router, private cd: ChangeDetectorRef) { }


  ngAfterViewInit(): void {
    this.booksFacade.searchBooksResult$.pipe(untilDestroyed(this)).subscribe((books: IBook[]) => {
      this.searchResultOptions = (books && books.length > 0) ? books : [];
      this.refresh();
    });
    this.booksFacade.bookState$.pipe(untilDestroyed(this)).subscribe((bookState: IBooksState) => {
      this.showSearchNoResults = bookState.searchNoResults;
      this.searchInProgress = bookState.isLoading;
      this.refresh();
    });
  }

  private refresh() {
    this.cd.detectChanges();
  }

  public onSearchQuery(query: string) {
    this.booksFacade.searchBooks(query);
  }

  public onSearchSelected(event: MatAutocompleteSelectedEvent) {
    const id = event.option.value;
    this.router.navigate(['books', id]);
  }

}
