import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../services/products.service';
import { Product } from '../model/Product';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-main-container',
    templateUrl: './main.container.component.html',
    styleUrls: ['./main.container.component.scss']
})

export class MainContainerComponent implements OnInit {
    title = 'BBShop';
    products: Product[];
    searchtext: String;
    

    constructor (private productsService: ProductsService) {}

    //eseguito all'inizializzazione
    ngOnInit() {
        //this.getProductsByName();
    }

    // TODO: provare questa query *star+wars*
    getProductsByName(): void {
        this.productsService.getProductsByName(this.searchtext)
    }

}
