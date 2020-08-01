import { Component, OnInit, ElementRef, Input, Output, EventEmitter, AfterViewInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search',
  template: ''
})
export class SearchComponent implements AfterViewInit {
  @Input() showSearchNoResults = false;
  @Input() showSearchSelector = false;
  @Input() searchInProgress = false;
  @Input() searchResultOptions: any = [];
  @Output() searchQuery: EventEmitter<string> = new EventEmitter();
  @Output() searchSelect: EventEmitter<MatAutocompleteSelectedEvent> = new EventEmitter();
  public searchFormControl = new FormControl(null);

  @ViewChild(MatAutocompleteTrigger) autoTrigger: MatAutocompleteTrigger;

  constructor() {
    this.searchFormControl = new FormControl(null);
    this.searchFormControl.valueChanges.pipe(debounceTime(400), distinctUntilChanged()).subscribe(query => {
      this.showSearchNoResults = false;
      if ((query.length > 1)) {
        this.searchInProgress = true;
        this.searchQuery.emit(query);
      } else if (query.length === 0) {
        this.searchInProgress = false;
      }
    });
  }

  ngAfterViewInit() {
    this.autoTrigger.autocomplete.closed.subscribe(e => {
      this.showSearchSelector = false;
    });
  }

  public onSearchOptionSelected(event: MatAutocompleteSelectedEvent) {
    this.searchSelect.emit(event);
    this.resetSearchInput();
  }

  public onResetSearchInput() {
    this.resetSearchInput();
  }

  public onCloseSearch() {
    this.showSearchSelector = false;
  }

  private resetSearchInput() {
    this.searchFormControl.setValue('');
  }

}
