import { SearchComponent } from './../search.component';
import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.scss']
})
export class SearchBooksComponent extends SearchComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
