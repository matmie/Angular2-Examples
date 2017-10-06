import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductGuardService } from './product-guard.service';

@NgModule({
  imports: [
    RouterModule.forChild([ //Dobrą praktyką jest, aby Service był zadeklarowany tylko raz. Funkcja forChild powoduje, że RouterModule nie zostanie ponownie zarejestrowany.
        {path:'products', component: ProductListComponent},
        {path:'products/:id', component:ProductDetailComponent, canActivate: [ProductGuardService]},
    ]),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
