import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Product } from '../Model/product';
import { ProductWrapper } from '../services/wrappers/product.response.wrapper';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProductsService {

    private productsUrl = 'http://localhost:3030/products';
    lastCalledService: Function;
    lastCalledServiceParams: String[];
    skip = 0;

    constructor(private http: HttpClient) { }

    /**
    * Handle Http operation that failed.
    * Let the app continue.
    * @param operation - name of the operation that failed
    * @param result - optional value to return as the observable result
    */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }

    getProductByID(id): Observable<Object> {
        const queryString = '?id=' + id;
        return this.http.get(this.productsUrl + queryString);
    }

    /**
    * Returns every Product whose name contains the param.
    * @param name - string contained in every product retrieved
    * @param skip - is the index of the first element returned by the service
    */
    getProductsByCategory(name, lowPrice, highPrice, skip: number): Observable<Object> {
        let queryString: String;
        queryString = '?category.name=' + name + '&price[$gt]=' + lowPrice + '&price[$lt]=' + highPrice + '&$skip=' + skip;
        console.log('__ . . :', this.productsUrl + queryString);
        return this.http.get(this.productsUrl + queryString);
    }

    getProductsByName(name, lowPrice, highPrice, skip: number): Observable<Object> {
        const queryString = '?name[$like]=*' + name + '*&price[$gt]=' + lowPrice + '&price[$lt]=' + highPrice + '&$skip=' + skip;
        return this.http.get(this.productsUrl + queryString);
    }
}
