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
    priceRange: Number[];

    /*dichiarare e definire tmpProdSource e optionContainerComponent non serve veramente,
     l'ho messo perchè pare ci sia un bug nel ngServe che non si rende conto
     che non sto usando attributi di questa classe ma di quella che esegue effettivamente il codice (LocalDataService),
     quindi dà errore, anche se poi funziona tutto..
    */
    tmpProdsSource = null;
    optionContainerComponent = null;

    constructor(private productsService: ProductsService, private localDataService: LocalDataService, private ref: ChangeDetectorRef) {
        this.localDataService.updateProdListFn = this.getProductsByCategory;
    }

    //eseguito all'inizializzazione
    ngOnInit() {
        window.addEventListener('scroll', this.scroll, true); //third parameter
        this.prodsSubscription = this.localDataService.tmpProdsObservable.subscribe(prods => this.products = prods);
        this.localDataService.productListComponent = this;
    }

    scroll = (): void => {
        const currentDiv = document.getElementById('list-main-div');
        const x = currentDiv.scrollTop;
        const max = currentDiv.scrollHeight;
        if (x >= 0.95 * (max - 500)) { //condizione bruttina ma dovrebbe andare..
            this.products = this.products.concat(this.products);
        }

    }

    getPriceRange() {
        this.priceRange = this.localDataService.optionContainerComponent.getPriceRange();
        /* alert(this.priceRange); */
    }

    getProductsByCategory(cat: String): void {
        const priceRange = this.optionContainerComponent.getPriceRange();
        this.productsService.getProductsByCategory(cat, priceRange[0], priceRange[1])
            .subscribe((wrap: ProductWrapper) => {
                console.log(wrap);
                this.tmpProdsSource.next(wrap.data);

            });
    }


    getProductsByName(): void {
        this.getPriceRange();
        this.productsService.getProductsByName(this.prodName, this.priceRange[0], this.priceRange[1])
            .subscribe((wrap: ProductWrapper) => {
                console.log(wrap);
                this.products = wrap.data;
            });
    }


    setProdName(name: String): void {
        if (name.length > 0) {
            this.prodName = name;
        }
    }

    filterProductsByPrice(range: Number[]) {
        //Metti la logica di filtraggio
    }

    resetProducts() {
        this.products = [];
    }

}

