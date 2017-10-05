import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductGuardService } from './products/product-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
        //Pierszy dopasowany wygrywa dlatego wazna jest kolejność
        {path:'products', component: ProductListComponent},
        {path:'products/:id', component:ProductDetailComponent, canActivate: [ProductGuardService]},
        {path:'welcome', component:WelcomeComponent},
        {path:'', redirectTo: 'welcome', pathMatch: 'full'}, //Dokładne dopasowanie 'pathMatch' ponieważ chcemy, żeby srona welcome była wyświetlana tylko dla braku znaków po adresie serwera 
        {path:'**', redirectTo: 'welcome', pathMatch: 'full'}
    ], {useHash:true})
  ],
  providers: [
    ProductGuardService],
  bootstrap: [
      AppComponent
    ]
})
export class AppModule { }
