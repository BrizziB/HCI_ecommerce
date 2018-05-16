import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ProductsService } from '../products.service';
import { Product } from '../../model/product';

@Injectable()
export class LocalDataService {

/*   private messageSource = new BehaviorSubject<string>("default message");
  currentMessage = this.messageSource.asObservable(); */

  public updateProdListFn: Function;
  public updatePriceRangeFn: Function;
  tmpProdsSource = new BehaviorSubject<Product[]>([]);
  tmpProdsObservable = this.tmpProdsSource.asObservable();
  tmpPriceSource = new BehaviorSubject<Number[]>([]);
  tmpPriceObservable = this.tmpPriceSource.asObservable();

  updatePriceRange(range: Number[]) {
    this.tmpPriceSource.next(range);
}

  constructor(private productsService: ProductsService) { }

}
