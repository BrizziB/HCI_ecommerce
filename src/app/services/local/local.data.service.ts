import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ProductsService } from '../products.service';
import { Product } from '../../model/product';
import { ProductListComponent } from '../../components/product.list.component';

@Injectable()
export class LocalDataService {

  /*   private messageSource = new BehaviorSubject<string>("default message");
    currentMessage = this.messageSource.asObservable(); */
  lowPrice: Number;
  highPrice: Number;
  public updateProdListFn: Function;
  public updatePriceRangeFn: Function;
  applyPriceFilterPostSearch: Function;
  tmpProdsSource = new BehaviorSubject<Product[]>([]);
  tmpProdsObservable = this.tmpProdsSource.asObservable();
  tmpPriceSource = new BehaviorSubject<Number[]>([]);
  tmpPriceObservable = this.tmpPriceSource.asObservable();
  productListComponent: ProductListComponent;


  updatePriceRange(range: Number[]) {
    this.tmpPriceSource.next(range);
  }

  setPriceRange(range: Number[]): void {
    this.lowPrice = range[0];
    this.highPrice = range[1];
  }


  constructor(private productsService: ProductsService) { }

}
