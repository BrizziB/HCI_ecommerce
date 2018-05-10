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
    subscription: Subscription;
    /* non serve veramente, l'ho messo perchè pare ci sia un bug nel ngServe che non si rende conto
     che non sto usando un attributo di questa classe ma di quella di localDataService a riga 41,
     quindi dà errore, anche se poi funziona tutto..
    */
    tmpProdsSource = null;

    constructor(private productsService: ProductsService, private localDataService: LocalDataService, private ref: ChangeDetectorRef) {
        this.localDataService.updateProdListFn = this.getProductsByCategory;
    }

    //eseguito all'inizializzazione
    ngOnInit() {
        this.subscription = this.localDataService.tmpProdsObservable.subscribe(prods => this.products = prods);
    }

    getProductsByCategory(cat: String, ref: ChangeDetectorRef): void {
        this.productsService.getProductsByCategory(cat)
            .subscribe((wrap: ProductWrapper) => {
                console.log(wrap);
                this.tmpProdsSource.next(wrap.data);
            });
    }

    // TODO: provare questa query *star+wars*
    getProductsByName(): void {
        this.productsService.getProductsByName(this.prodName)
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

