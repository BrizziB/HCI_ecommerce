import { Component, OnInit } from '@angular/core';

import { Category } from '../Model/category';
import { CategoriesService } from '../services/categories.service';
import { CategoryWrapper } from '../services/wrappers/category.response.wrapper';
import { Product } from '../Model/product';

@Component({
  selector: 'app-categories-container',
  templateUrl: './categories.container.component.html',
  styleUrls: ['./categories.container.component.scss']
})
export class CategoriesComponent implements OnInit {

  cats: Category[] = [];
  subCats: Category[] = [];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.cats[0] = new Category('TVs');
    this.cats[1] = new Category('Pappa');
    }

    getSubCategories(category: Category) {
      this.categoriesService.getSubCategoriesByName(category.name)
        .subscribe((wrap: CategoryWrapper) => {
          this.subCats = wrap.data[0].subCategories;
        });
    }

  // per prova
/*   getCategoryByName(): void {
    this.categoriesService.getCategoryByName('Gift Ideas').subscribe(categories => this.cats = categories);
  } */

}
