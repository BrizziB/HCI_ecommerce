import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Category } from '../Model/category';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class CategoriesService {

    private categoriesUrl = 'http://localhost:3030/categories';

    constructor(
        private http: HttpClient) { }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: void): Observable<T> => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            alert(error);
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    getSubCategoriesByName(catName: String): Observable<Object> {
        const queryString = this.categoriesUrl + '?name=' + catName;
        console.log(queryString);
        return this.http.get(queryString);
    }





}
