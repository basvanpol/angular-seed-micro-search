import { IBooksState } from './../../../models/state/books.state';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
@Injectable()
export class BooksFacade {

constructor(private store: Store<IBooksState>) {}

}
