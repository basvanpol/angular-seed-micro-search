import { throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BaseHttpService {

    constructor() { }

    protected getHttpHeaders() {
      return new HttpHeaders({ 'Content-Type': 'application/json' });
    }

    protected handleError(error: any | any) {
        let errorMsg = error.message || `An unknown error has occurred while retrieving data. Please try again.`;
        if (error.error && error.error.message) {
            errorMsg = error.error.message;
        }

        const e = new Error();
        e['status'] = error.status;
        e.message = errorMsg;
        return throwError(e);
    }

}

