"use strict";
var router_1 = require('@angular/router');
var heroes_component_1 = require('./heroes.component');
var dashboard_component_1 = require('./dashboard.component');
var hero_detail_component_1 = require('./hero-detail.component');
//import { AppComponent } from './app.component';
var appRoutes = [
    {
        path: 'heroes',
        component: heroes_component_1.HeroesComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: hero_detail_component_1.HeroDetailComponent
    }
]; //Tablica definiująca który komponent ma być przypisany do określonej ścieżki
exports.routing = router_1.RouterModule.forRoot(appRoutes); //Metoda forRoot zwraca potrzebne funkcjie do przeprowadzania routingu
//# sourceMappingURL=app.routing.js.map