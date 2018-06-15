import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';

import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header.component';
import { MainContainerComponent } from './components/main.container.component';
import { OptionContainerComponent } from './components/option.container.component';
import { CategoriesComponent } from './components/categories.container.component';
import { DoubleSliderComponent } from './components/sub-components/double.slider.component';
import { BottomTableComponent } from './components/sub-components/bottom.table.component';
import { ProductFormComponent } from './components/sub-components/product.form.component';
import { ProductListComponent } from './components/product.list.component';
import { CartComponent } from './components/cart.component';

import { ProductsService } from './services/products.service';
import { CategoriesService } from './services/categories.service';
import { LocalDataService } from './services/local/local.data.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContainerComponent,
    OptionContainerComponent,
    CategoriesComponent,
    DoubleSliderComponent,
    BottomTableComponent,
    ProductFormComponent,
    ProductListComponent,
    CartComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NouisliderModule
  ],
  providers: [
    ProductsService,
    CategoriesService,
    LocalDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
