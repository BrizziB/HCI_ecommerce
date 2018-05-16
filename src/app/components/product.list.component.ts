import { Component, OnInit, ViewChildren, QueryList, NgModule, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsService } from '../services/products.service';
import { LocalDataService } from '../services/local/local.data.service';
import { Product } from '../model/product';
import { ProductWrapper } from '../services/wrappers/product.response.wrapper';
import { ProductFormComponent } from './sub-components/product.form.component';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';


@Component({
    selector: 'app-product-list',
    templateUrl: './product.list.component.html',
    styleUrls: ['./product.list.component.scss']
})


export class ProductListComponent implements OnInit {

    products: Product[] = [];
    prodName: String;
    tmpProds: Product[] = [];
    prodsSubscription: Subscription;
    /*dichiarare e definire tmpProdSource non serve veramente,
     l'ho messo perchè pare ci sia un bug nel ngServe che non si rende conto
     che non sto usando un attributo di questa classe ma di quella di localDataService a riga 41,
     quindi dà errore, anche se poi funziona tutto..
    */
    tmpProdsSource = null;

    constructor(private productsService: ProductsService, private localDataService: LocalDataService, private ref: ChangeDetectorRef) {
        this.localDataService.updateProdListFn = this.getProductsByCategory;
    }

    //eseguito all'inizializzazione
    ngOnInit() {
        this.prodsSubscription = this.localDataService.tmpProdsObservable.subscribe(prods => this.products = prods);

    }

    getProductsByCategory(cat: String, lowPrice: Number, highPrice: Number): void {
        this.productsService.getProductsByCategory(cat, lowPrice, highPrice)
            .subscribe((wrap: ProductWrapper) => {
                console.log(wrap);
                this.tmpProdsSource.next(wrap.data);
            });
    }


    getProductsByName(lowPrice: Number, highPrice: Number): void {
        this.productsService.getProductsByName(this.prodName,lowPrice, highPrice)
            .subscribe((wrap: ProductWrapper) => {
                console.log(wrap);
                this.products = wrap.data;
            });
    }


    setProdName(name: String) {
        if (name.length > 0) {
            this.prodName = name;
        }
    }

}

