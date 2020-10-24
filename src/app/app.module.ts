import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ShopItemComponent } from './components/shop-item/shop-item.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { MensClothesComponent } from './components/mens-clothes/mens-clothes.component';
import { JeweleryComponent } from './components/jewelery/jewelery.component';
import { WomansClothesComponent } from './components/womans-clothes/womans-clothes.component';

@NgModule({
  declarations: [
    AppComponent,
    
    NavbarComponent,
    ShopItemComponent,
    CartComponent,
    CheckoutComponent,
    ElectronicsComponent,
    MensClothesComponent,
    JeweleryComponent,
    WomansClothesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
