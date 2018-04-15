import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './components/app.component';
import { HeaderComponent } from './components/header.component';
import { MainContainerComponent } from './components/main.container.component';
import { OptionContainerComponent } from './components/option.container.component';
import { CategoriesComponent } from './components/categories.container.component';
import { DoubleSliderComponent } from './components/sub-components/double.slider.component';
import { NouisliderComponent } from 'ng2-nouislider';


import { ProductsService } from './services/products.service';
import { CategoriesService } from './services/categories.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainContainerComponent,
    OptionContainerComponent,
    CategoriesComponent,
    DoubleSliderComponent,
    NouisliderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    ProductsService,
    CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
