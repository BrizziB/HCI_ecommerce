import { Component, OnInit } from '@angular/core';
import { Product } from '../model/Product';
import { LocalDataService } from '../services/local/local.data.service';

@Component({
    selector: 'app-cart-component',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {

    purchasedProducts: Product[] = [];
    totalPrice = 0.00;
    showCart = false;
    emptyCart = true;

    constructor(private localDataService: LocalDataService) { }

    ngOnInit() {
        this.localDataService.cartComponent = this;
    }

    addProd(prod) {
        this.purchasedProducts.push(prod);
        this.computeTotalPrice();
        if (this.purchasedProducts.length > 0) {
            this.emptyCart = false;
        } else {
            this.emptyCart = true;
        }
    }

    removeProd(prod) {
        const index = this.purchasedProducts.findIndex(product => product.name === prod.name);
        if (index > -1) {
            this.purchasedProducts.splice(index, 1);
        }
        this.computeTotalPrice();
        if (this.purchasedProducts.length > 0) {
            this.emptyCart = false;
        } else {
            this.emptyCart = true;
        }
    }

    hideCart() {
        this.localDataService.rootComponent.shadedScreen = false;
        this.showCart = false;
    }

    buy() {
        if (this.purchasedProducts.length > 2) {
            alert('Cool ! you have bought a lot of nice things :D ');
        } else if (this.purchasedProducts.length === 1) {
            alert('We are glad you found what you were looking for :)');
        }
        this.totalPrice = 0.0;
        this.purchasedProducts = [] ;
        this.emptyCart = true;
        
    }

    computeTotalPrice() {
        this.totalPrice = 0.0;
        this.purchasedProducts.forEach(prod => {
            this.totalPrice += prod.price;
        });
        this.totalPrice.toFixed(2);
    }

}
