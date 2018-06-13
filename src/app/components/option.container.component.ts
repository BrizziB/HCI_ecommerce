import { Component, OnInit, HostListener, AfterViewChecked } from '@angular/core';
import { LocalDataService } from '../services/local/local.data.service';
import { ProductListComponent } from './product.list.component';

@Component({
    selector: 'app-option-container',
    templateUrl: './option.container.component.html',
    styleUrls: ['./option.container.component.scss']
})
export class OptionContainerComponent implements OnInit, AfterViewChecked {

    priceRange: Number[] = [];
    priceOrder: Number;
    maxPrice = 30000;
    minPrice = 0.01;
    rangeChanged = false;
    productList: ProductListComponent;
    sortingCriteria;

    constructor(private localDataService: LocalDataService) {
    }

    ngOnInit() {
        this.localDataService.optionContainerComponent = this;

    }
    ngAfterViewChecked() {
        this.productList = this.localDataService.productListComponent;
    }


    getPriceRange(): Number[] {
        if (this.priceRange.length === 0) {
            return [this.minPrice, this.maxPrice];
        } else if (this.priceRange[0] === undefined || this.priceRange[0] === null) {
            return [this.minPrice, this.priceRange[1]];
        } else if (this.priceRange[1] === undefined || this.priceRange[1] === null) {
            return [this.priceRange[0], this.maxPrice];
        } else { return this.priceRange; }
    }

    sortByHigherPrice() {
        this.sortingCriteria = 'Higher Price';
        this.productList.sortProdutcsByHigherPrice();
        this.productList.lastSortingCriteria = this.productList.sortProdutcsByHigherPrice;
    }
    sortByLowerPrice() {
        this.sortingCriteria = 'Lower Price';
        this.productList.sortProdutcsByLowerPrice();
        this.productList.lastSortingCriteria = this.productList.sortProdutcsByLowerPrice;
    }

    resetPriceFilter() {
        this.priceRange = [];
        const param =  this.productList.lastCalledParam;
        this.productList.lastCalledService(param, true);
    }

    applyPriceFilter() {
        const param =  this.productList.lastCalledParam;
        this.productList.lastCalledService(param, true);
    }

    updatePriceRange() {
        this.rangeChanged = true;
    }
}
