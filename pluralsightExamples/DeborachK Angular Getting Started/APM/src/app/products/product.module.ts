import { NgModule } from '@angular/core';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service';
import { SharedModule } from './../shared/shared.module';
import { ProductsRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
    SharedModule,
    ProductsRoutingModule
  ],
  declarations: [
      ProductListComponent,
      ProductDetailComponent,
      ConvertToSpacesPipe
  ],
  providers: [
     ProductGuardService,
     ProductService 
  ]
})
export class ProductModule { }
