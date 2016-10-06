import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';

//import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
      path: 'heroes' ,
      component: HeroesComponent
  },
  {
      path: 'dashboard',
      component: DashboardComponent
  },
  {
      path: '',
      redirectTo: '/dashboard',
      pathMatch: 'full'
  },
  {
      path: 'detail/:id',
      component: HeroDetailComponent
  }
]; //Tablica definiująca który komponent ma być przypisany do określonej ścieżki

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes); //Metoda forRoot zwraca potrzebne funkcjie do przeprowadzania routingu
