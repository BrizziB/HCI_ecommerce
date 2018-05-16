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
    priceRange: Number[];
    tmpProd: Product;
    subscription: Subscription;

    constructor(private localDataService: LocalDataService) {
    }

    //eseguito all'inizializzazione
    ngOnInit() {
        this.subscription = this.localDataService.tmpPriceObservable.subscribe(range => {
            this.priceRange = range;
    } );
}


getProductsByName() {
    this.prodList.setProdName(this.searchTxt);
    this.prodList.getProductsByName();
}

}
