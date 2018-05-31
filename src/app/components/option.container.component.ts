import { Component, OnInit, HostListener } from '@angular/core';
import { LocalDataService } from '../services/local/local.data.service';

@Component({
    selector: 'app-option-container',
    templateUrl: './option.container.component.html',
    styleUrls: ['./option.container.component.scss']
})
export class OptionContainerComponent implements OnInit {

    priceRange: Number[] = [];
    priceOrder: Number;
    maxPrice = 30000;
    minPrice = 0.01;
    rangeChanged = false;



    constructor(private localDataService: LocalDataService) {
    }

    ngOnInit() {
        this.localDataService.optionContainerComponent = this;
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


    resetPriceFilter() {
        this.priceRange = [];
        this.rangeChanged = false;
    }

    applyPriceFilter() {
        this.localDataService.productListComponent.filterProductsByPrice(this.priceRange);
    }

    updatePriceRange() {
        this.rangeChanged = true;
    }
}
