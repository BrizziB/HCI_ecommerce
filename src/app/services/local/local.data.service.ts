import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ProductsService } from '../products.service';
import { Product } from '../../model/product';
import { ProductListComponent } from '../../components/product.list.component';
import { OptionContainerComponent } from '../../components/option.container.component';
import { AppComponent } from '../../components/app.component';
import { MainContainerComponent } from '../../components/main.container.component';

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

  constructor(private productsService: ProductsService) { }

  setShowing() {
    this.rootComponent.setShowing(true);
    this.mainContainerComponent.isShowing = true;
  }

  unsetShowing() {
    this.rootComponent.setShowing(false);
    this.mainContainerComponent.isShowing = false;
  }

}
