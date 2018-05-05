import { Component, OnInit, ViewChildren, QueryList, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductsService } from '../services/products.service';
import { Product } from '../model/product';
import { ProductWrapper } from '../services/wrappers/product.response.wrapper';
import { ProductFormComponent } from './sub-components/product.form.component';


@Component({
    selector: 'app-product-list',
    templateUrl: './product.list.component.html',
    styleUrls: ['./product.list.component.scss']
})


export class ProductListComponent implements OnInit {

    @ViewChildren(ProductFormComponent) productFormChildren: QueryList<ProductFormComponent>;

    products: Product[];
    //formChildren: ProductFormComponent[];
    prodName: String;


    constructor(private productsService: ProductsService) {
    }

    //eseguito all'inizializzazione
    ngOnInit() {
    }

    // TODO: provare questa query *star+wars*
    getProductsByName(): void {
        this.productsService.getProductsByName(this.prodName)
            .subscribe((wrap: ProductWrapper) => {
                console.log(wrap);
                this.products = wrap.data;
/*                 this.formChildren = this.productFormChildren.toArray();
                let i = 0;
                this.formChildren.forEach(form => {
                    form.product = this.products[i];
                    i++;
                }); */
            });
    }

    setProdName(name: String) {
        if (name.length > 0) {
            this.prodName = name;
        }
    }

}
