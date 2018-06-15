import { Component } from '@angular/core';
import { LocalDataService } from '../services/local/local.data.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    constructor(private localDataService: LocalDataService) { }

    showCart() {
        this.localDataService.cartComponent.showCart = ! this.localDataService.cartComponent.showCart;
        this.localDataService.rootComponent.shadedScreen = this.localDataService.cartComponent.showCart;
    }
}
