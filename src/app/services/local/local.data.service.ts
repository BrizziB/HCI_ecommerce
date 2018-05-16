import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ProductsService } from '../products.service';
import { Product } from '../../model/product';
import { ProductListComponent } from '../../components/product.list.component';
import { OptionContainerComponent } from '../../components/option.container.component';

@Injectable()
export class LocalDataService {

  /*   private messageSource = new BehaviorSubject<string>("default message");
    currentMessage = this.messageSource.asObservable(); */
  public updateProdListFn: Function;
  applyPriceFilterPostSearch: Function;
  tmpProdsSource = new BehaviorSubject<Product[]>([]);
  tmpProdsObservable = this.tmpProdsSource.asObservable();

  productListComponent: ProductListComponent;
  optionContainerComponent: OptionContainerComponent;


  constructor(private productsService: ProductsService) { }

}
