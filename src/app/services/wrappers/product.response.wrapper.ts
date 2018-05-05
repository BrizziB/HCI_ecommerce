import { Product } from '../../Model/product';

export class ProductWrapper {
    total: number;
    limit: number;
    skip: number;
    data: Product[];
}
