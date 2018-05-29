import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../model/product';
import { ProductWrapper } from '../services/wrappers/product.response.wrapper';
import { FormsModule } from '@angular/forms';
import { LocalDataService } from '../services/local/local.data.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-main-container',
    templateUrl: './main.container.component.html',
    styleUrls: ['./main.container.component.scss']
})

export class MainContainerComponent implements OnInit {
    @ViewChild('prodList') prodList;
    title = 'BBShop';
    products: Product[];
    searchTxt: String;
    oldSearch: String;
    tmpProd: Product;
    subscription: Subscription;
    isShowing = false;

    constructor(private localDataService: LocalDataService) {
    }

    //eseguito all'inizializzazione
    ngOnInit() {
        this.localDataService.mainContainerComponent = this;
    }

    setChangingText() {
        if (this.prodList.products.length === 0) {
            this.isShowing = false;
        }

    }

    deleteProducts() {
        this.prodList.resetProducts();
        this.searchTxt = '';
    }

    setShowing(isShowing) {
        this.isShowing = isShowing;
        this.localDataService.rootComponent.setShowing(this.isShowing);

    }

    getProductsByName() {
        if (this.searchTxt) {
            this.prodList.setProdName(this.searchTxt);
            this.prodList.getProductsByName();
        }
        this.oldSearch = this.searchTxt;

    }

}
