import { IBook } from './../../../models/book';
import { Component, Input, Output, EventEmitter, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-search',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnDestroy {
  @Input() showSearchNoResults: boolean;
  @Input() searchInProgress: boolean;
  @Input() searchResultOptions: IBook[];
  @Output() searchQuery: EventEmitter<string> = new EventEmitter();
  @Output() searchSelect: EventEmitter<MatAutocompleteSelectedEvent> = new EventEmitter();
  public emittedQuery: string;
  public searchFormControl = new FormControl(null);

  @ViewChild(MatAutocompleteTrigger) autoTrigger: MatAutocompleteTrigger;

  constructor(public cd: ChangeDetectorRef) {

    this.searchFormControl = new FormControl();
    this.searchFormControl.valueChanges.pipe(debounceTime(400), distinctUntilChanged(), untilDestroyed(this)).subscribe(query => {
      if (query && query.length > 0) {
        this.emittedQuery = query;
        this.searchQuery.emit(query);
      }
      this.refresh();
    });
  }

  refresh() {
    this.cd.detectChanges();
  }

  public onSearchOptionSelected(event: MatAutocompleteSelectedEvent) {
    if (event.option.value) {
      this.searchSelect.emit(event);
      this.resetSearchInput();
    }
  }

  public onResetSearchInput() {
    this.resetSearchInput();
  }

  private resetSearchInput() {
    this.searchFormControl.setValue('');
  }

  ngOnDestroy() { }

}
