import { Component, OnInit, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Product } from '../model/product';

@Component({
    selector: 'app-product-list',
    templateUrl: './product.list.component.html',
    styleUrls: ['./product.list.component.scss']
})


export class ProductListComponent implements OnInit {

    products: Product[];

    ngOnInit() {

    }


}
