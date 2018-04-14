import { Component, OnInit } from '@angular/core';

import { Category } from '../model/category';
import { CategoriesService } from '../services/categories.service';

@Component({
  selector: 'app-categories-container',
  templateUrl: './categories.container.component.html',
  styleUrls: ['./categories.container.component.scss']
})
export class CategoriesComponent implements OnInit {

  cats: Category;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit() {
  }

  // per prova
  getCategoryByName(): void {
    this.categoriesService.getCategoryByName('Gift Ideas').subscribe(categories => this.cats = categories);
  }

}
