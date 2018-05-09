import { Category } from '../../Model/category';

export class CategoryWrapper {
    total: number;
    limit: number;
    skip: number;
    data: Category[];
}
