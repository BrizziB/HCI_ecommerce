import { Component } from '@angular/core';
import { LocalDataService } from '../services/local/local.data.service';

@Component({
    selector: 'app-option-container',
    templateUrl: './option.container.component.html',
    styleUrls: ['./option.container.component.scss']
})
export class OptionContainerComponent {

    priceRange: Number[] = [0, 120];
    priceOrder: Number;

    constructor(private localDataService: LocalDataService) {
        this.localDataService.updatePriceRangeFn = this.updatePriceRange;
    }

    updatePriceRange() {
        this.localDataService.updatePriceRange(this.priceRange);

    }
}
