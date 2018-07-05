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
    priceRanges = [[0, 10], [10, 50], [50, 200], [200, 5000], [5000, 30000]];

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
        this.sortingCriteria = 'Highest Price';
        this.productList.sortProdutcsByHigherPrice();
        this.productList.lastSortingCriteria = this.productList.sortProdutcsByHigherPrice;
    }
    sortByLowerPrice() {
        this.sortingCriteria = 'Lowest Price';
        this.productList.sortProdutcsByLowerPrice();
        this.productList.lastSortingCriteria = this.productList.sortProdutcsByLowerPrice;
    }

    uncheckRadioBtn(event) {
        Array.from(document.getElementsByClassName('radio-container')).forEach(element => {
            element.classList.remove('active-range-label');
        });
        event.target.parentElement.classList.add('active-range-label');
        switch (event.target.value) {
            case '1': {
                this.priceRange = [0, 10];
                break;
            }
            case '2': {
                this.priceRange = [10, 50];
                break;
            }
            case '3': {
                this.priceRange = [50, 200];
                break;
            }
            case '4': {
                this.priceRange = [200, 5000];
                break;
            }
            case '5': {
                this.priceRange = [5000, 30000];
                break;
            }
            default: {
                break;
            }
        }

        const param = this.productList.lastCalledParam;
        if (param) {
            this.productList.lastCalledService(param, true);
        }
    }

    resetCheckBox() {
        ['range-1', 'range-2', 'range-3', 'range-4', 'range-5'].forEach(function (id) {
            (<HTMLInputElement>document.getElementById(id)).checked = false;
        });
        Array.from(document.getElementsByClassName('radio-container')).forEach(element => {
            element.classList.remove('active-range-label');
        });
    }

    resetPriceFilter() {
        this.resetCheckBox();
        this.priceRange = [];
        const param = this.productList.lastCalledParam;
        this.productList.lastCalledService(param, true);
    }

    applyPriceFilter() {
        const param = this.productList.lastCalledParam;
        this.productList.lastCalledService(param, true);
    }

    updatePriceRange() {
        this.resetCheckBox();
        this.rangeChanged = true;
    }
}
