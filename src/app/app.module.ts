import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './ngModules/components/menu/menu.component';
import { BannerComponent } from './ngModules/components/banner/banner.component';
import { HomeComponent } from './ngModules/components/home/home.component';
import { ProductComponent } from './ngModules/components/product/product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './ngModules/material/material.module';
import { ProductsComponent } from './ngModules/components/products/products.component';
import { ProductTileComponent } from './ngModules/components/product-tile/product-tile.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BannerComponent,
    HomeComponent,
    ProductComponent,
    ProductsComponent,
    ProductTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
