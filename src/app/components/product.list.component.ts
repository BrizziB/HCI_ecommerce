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
import { CartComponent } from './cart.component';

@Component({
    selector: 'app-product-list',
    templateUrl: './product.list.component.html',
    styleUrls: ['./product.list.component.scss']
})


export class ProductListComponent implements OnInit {

    products: Product[] = [];
    public prodName: String;
    tmpProds: Product[] = [];
    prodsSubscription: Subscription;
    priceRange: Number[] = [0, 30000];
    lastCalledService: Function;
    lastCalledParam: String;
    lastSortingCriteria: Function;
    skip = 0;
    didScroll = false;

    constructor(private productsService: ProductsService, private localDataService: LocalDataService, private ref: ChangeDetectorRef) {
        // this.localDataService.updateProdListFn = this.getProductsByCategory;
    }

    // eseguito all'inizializzazione
    ngOnInit() {
        window.addEventListener('scroll', this.delayedScroll, true); //third parameter
        // this.prodsSubscription = this.localDataService.tmpProdsObservable.subscribe(prods => this.products = prods);
        this.localDataService.productListComponent = this;
        setInterval(() => {
            if (this.didScroll) {
                this.didScroll = false;
                this.scroll();
            }
        }, 1000);
    }

    delayedScroll = (): void => {
        this.didScroll = true;
    }

    scroll() {
        const currentDiv = document.getElementById('list-main-div');
        const x = currentDiv.scrollTop;
        const max = currentDiv.scrollHeight;
        if (x >= 0.965 * (max - 800)) { //condizione bruttina - rivedila ! 
            const name = this.lastCalledParam;
            this.lastCalledService(name, false);
        }
    }


    getPriceRange() {
        this.priceRange = this.localDataService.optionContainerComponent.getPriceRange();
    }

    sortProdutcsByLowerPrice() {
        this.products.sort((prod1, prod2) => {
            if (prod1.price > prod2.price) {
                return 1;
            } else {
                return -1;
            }
        });
    }

    sortProdutcsByHigherPrice() {
        this.products.sort((prod1, prod2) => {
            if (prod1.price > prod2.price) {
                return -1;
            } else {
                return +1;
            }
        });
    }

    getProductsByCategory(cat: String, isOriginalCall: boolean): void {
        const priceRange = this.localDataService.optionContainerComponent.getPriceRange();
        if (isOriginalCall) {
            this.lastCalledService = this.getProductsByCategory;
            this.lastCalledParam = cat;
            this.skip = 0;
            this.products = [];
        }
        else {
            this.skip = this.skip + 10;
        }
        this.productsService.getProductsByCategory(cat, priceRange[0], priceRange[1], this.skip)
            .subscribe((wrap: ProductWrapper) => {
                console.log(wrap);
                this.products = this.products.concat(wrap.data);
                if (this.lastSortingCriteria) {
                    this.lastSortingCriteria();
                }
            });
    }


    getProductsByName(name: String, isOriginalCall: boolean): void {
        const priceRange = this.localDataService.optionContainerComponent.getPriceRange();
        if (isOriginalCall) {
            this.lastCalledService = this.getProductsByName;
            this.lastCalledParam = name;
            this.skip = 0;
            this.products = [];
        }
        else {
            this.skip = this.skip + 10;
        }
        this.productsService.getProductsByName(name, priceRange[0], priceRange[1], this.skip)
            .subscribe((wrap: ProductWrapper) => {
                console.log(wrap);
                this.products = this.products.concat(wrap.data);
                if (this.lastSortingCriteria) {
                    this.lastSortingCriteria();
                }
            });
    }

    addToCartPressed(product: Product) {
        alert('Selected product has been added to your Cart');
        this.localDataService.cartComponent.addProd(product);
    }

    tooCheapPressed(minPrice: number) {
        this.priceRange[0] = minPrice;
        this.localDataService.optionContainerComponent.priceRange[0] = minPrice;
        this.lastCalledService(this.lastCalledParam, true);
        this.localDataService.optionContainerComponent.resetCheckBox();
    }

    tooExpensivePressed(maxPrice: number) {
        this.priceRange[1] = maxPrice;
        this.localDataService.optionContainerComponent.priceRange[1] = maxPrice;
        this.lastCalledService(this.lastCalledParam, true);
        this.localDataService.optionContainerComponent.resetCheckBox();
    }


    setProdName(name: String): void {
        if (name.length > 0) {
            this.prodName = name;
        }
    }

    resetProducts() {
        this.products = [];
    }

}

