import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../model/product';
import { ProductWrapper } from '../services/wrappers/product.response.wrapper';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-main-container',
    templateUrl: './main.container.component.html',
    styleUrls: ['./main.container.component.scss']
})

export class MainContainerComponent implements OnInit {
    @ViewChild('prodList') prodList ;
    title = 'BBShop';
    products: Product[];
    searchTxt: String;
    tmpProd: Product;

    constructor() { }

    //eseguito all'inizializzazione
    ngOnInit() {
    }
    getProductsByName() {
        this.prodList.setProdName(this.searchTxt);
        //qui sotto è temporaneo
        this.prodList.getProductsByName();
    }

}
