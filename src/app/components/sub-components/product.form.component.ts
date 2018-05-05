import { Component, OnInit, NgModule, OnChanges, Input, SimpleChanges } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Product } from '../../Model/product';

//import { Product } from '../../model/product'; così non trova product.ts, non so perchè

@Component({
    selector: 'app-product-form',
    templateUrl: './product.form.component.html',
    styleUrls: ['./product.form.component.scss']
})


export class ProductFormComponent implements OnInit, OnChanges {

    product: Product;
    name = 'PaPPa';

    ngOnInit() {

    }

    ngOnChanges(changes: SimpleChanges) {

    }

    setProduct(prod: Product) {
        this.product = prod;
    }

}
