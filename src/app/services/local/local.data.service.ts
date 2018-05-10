import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ProductsService } from '../products.service';
import { Product } from '../../model/product';

@Injectable()
export class LocalDataService {

/*   private messageSource = new BehaviorSubject<string>("default message");
  currentMessage = this.messageSource.asObservable(); */

  public updateProdListFn: Function;
  tmpProdsSource = new BehaviorSubject<Product[]>([]);
  tmpProdsObservable = this.tmpProdsSource.asObservable();

  constructor(private productsService: ProductsService) { }

}
