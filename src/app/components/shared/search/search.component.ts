import { IBook } from './../../../models/book';
import { Component, Input, Output, EventEmitter, AfterViewInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef, ɵConsole } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
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
    this.searchFormControl.valueChanges.pipe(debounceTime(400), distinctUntilChanged()).subscribe(query => {
      if (query && query.length > 0) {
        this.searchInProgress = true;
        this.emittedQuery = query;
        this.searchQuery.emit(query);
      } else if (query.length === 0) {
        this.searchInProgress = false;
        this.resetSearchInput();
        this.showSearchNoResults = false;
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

}
