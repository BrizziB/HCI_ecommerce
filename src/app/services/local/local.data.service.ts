import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ProductsService } from '../products.service';
import { Product } from '../../model/product';
import { ProductListComponent } from '../../components/product.list.component';
import { OptionContainerComponent } from '../../components/option.container.component';
import { AppComponent } from '../../components/app.component';
import { MainContainerComponent } from '../../components/main.container.component';
import { CartComponent } from '../../components/cart.component';

@Injectable()
export class LocalDataService {

  /*   private messageSource = new BehaviorSubject<string>("default message");
    currentMessage = this.messageSource.asObservable(); */
  public updateProdListFn: Function;
  applyPriceFilterPostSearch: Function;
  tmpProdsSource = new BehaviorSubject<Product[]>([]);
  tmpProdsObservable = this.tmpProdsSource.asObservable();


  rootComponent: AppComponent;
  mainContainerComponent: MainContainerComponent;
  productListComponent: ProductListComponent;
  optionContainerComponent: OptionContainerComponent;
  cartComponent: CartComponent;

  constructor(private productsService: ProductsService) { } //NB: productService è usato

  getProdService(): ProductsService { //vecchio modo di farlo, lasciato per ricordarlo ma è meglio quello nuovo usato nel resto dei casi
    return this.productsService;
  }

  setShowing() {
    this.rootComponent.setShowing(true);
    this.mainContainerComponent.isShowing = true;
  }

  unsetShowing() {
    this.rootComponent.setShowing(false);
    this.mainContainerComponent.isShowing = false;
  }

}
