import { Category } from './category';

export class Product {
    id: String;
    name: String;
    type: String;
    price: Number;
    description: String;
    manufacturer: String;
    model: String;
    image: String;
    categories: Category [];
}
