import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
        //Pierszy dopasowany wygrywa dlatego wazna jest kolejność
        {path:'welcome', component:WelcomeComponent},
        {path:'', redirectTo: 'welcome', pathMatch: 'full'}, //Dokładne dopasowanie 'pathMatch' ponieważ chcemy, żeby srona welcome była wyświetlana tylko dla braku znaków po adresie serwera 
        {path:'**', redirectTo: 'welcome', pathMatch: 'full'}
    ], {useHash:true}),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
