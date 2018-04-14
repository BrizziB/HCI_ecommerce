import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../services/products.service';
import { Product } from '../model/Product';

@Component({
    selector: 'app-main-container',
    templateUrl: './main.container.component.html',
    styleUrls: ['./main.container.component.scss']
})

export class MainContainerComponent implements OnInit {
    title = 'BBShop!!';
    products: Product[];

    constructor (private productsService: ProductsService) {}

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
    }

    getProductsByCat(): void {
    }
}
