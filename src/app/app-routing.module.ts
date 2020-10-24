import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectronicsComponent } from './components/electronics/electronics.component';
import { JeweleryComponent } from './components/jewelery/jewelery.component';
import { MensClothesComponent } from './components/mens-clothes/mens-clothes.component';
import { WomansClothesComponent } from './components/womans-clothes/womans-clothes.component';

const routes: Routes = [
  {path:"electronics", component :ElectronicsComponent},
  {path:"mens-clothing", component :MensClothesComponent},
  {path:"jewelery", component :JeweleryComponent},
  {path:"womans-clothing", component :WomansClothesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
