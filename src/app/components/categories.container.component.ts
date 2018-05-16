import { Component, OnInit, ViewChildren, QueryList, NgModule, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Category } from '../Model/category';
import { CategoriesService } from '../services/categories.service';
import { CategoryWrapper } from '../services/wrappers/category.response.wrapper';
import { Product } from '../Model/product';
import { LocalDataService } from '../services/local/local.data.service';

@Component({
  selector: 'app-categories-container',
  templateUrl: './categories.container.component.html',
  styleUrls: ['./categories.container.component.scss']
})
export class CategoriesComponent implements OnInit {

  cats: Category[] = [];
  subCats: Category[] = [];

  constructor(private categoriesService: CategoriesService, private localDataService: LocalDataService, private ref: ChangeDetectorRef) {
    this.cats[0] = new Category('TVs');
    this.cats[1] = new Category('Home Theater Systems');
    this.cats[2] = new Category('Headphones');
    this.cats[3] = new Category('Speakers');
    this.cats[4] = new Category('Remote Controls');
    this.cats[5] = new Category('Audio');
  }

  ngOnInit() {

  }

  getSubCategories(category: Category) {

    if (this.localDataService.updateProdListFn) {
      this.localDataService.updateProdListFn(category.name, this.ref);
    }

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
