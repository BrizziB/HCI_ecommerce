import { Component, OnInit } from '@angular/core';

import { Category } from '../Model/category';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categories-container',
  templateUrl: './categories.container.component.html',
  styleUrls: ['./categories.container.component.scss']
})
export class CategoriesComponent implements OnInit {

  cats: Category[] = [];

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.cats[0] = new Category('TVs');
    this.cats[1] = new Category('Pappa');
    }

  // per prova
/*   getCategoryByName(): void {
    this.categoriesService.getCategoryByName('Gift Ideas').subscribe(categories => this.cats = categories);
  } */

}
