import { Component } from '@angular/core';
import { LocalDataService } from '../services/local/local.data.service';

@Component({
    selector: 'app-option-container',
    templateUrl: './option.container.component.html',
    styleUrls: ['./option.container.component.scss']
})
export class OptionContainerComponent {

    priceRange: Number[] = [];
    priceOrder: Number;
    rangeChanged = false;

    constructor(private localDataService: LocalDataService) {
        this.localDataService.updatePriceRangeFn = this.updatePriceRange;
    }

    updatePriceRange() {
        this.localDataService.updatePriceRange(this.priceRange);
        this.rangeChanged = true;

    }

    resetPriceFilter() {
        this.priceRange = []; // [0.001, 30000];
        this.rangeChanged = false;
    }

    applyPriceFilter() {
        this.localDataService.productListComponent.filterProductsByPrice(this.priceRange);
    }
}
