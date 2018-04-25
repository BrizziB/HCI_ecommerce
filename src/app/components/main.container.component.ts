import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../services/products.service';
import { Product } from '../model/Product';

@Component({
    selector: 'app-main-container',
    templateUrl: './main.container.component.html',
    styleUrls: ['./main.container.component.scss']
})

export class MainContainerComponent implements OnInit {
    title = 'BBShop';
    

    constructor (private productsService: ProductsService) {}

    ngOnInit() {
    }

    getProductsByCat(): void {
    }
}
