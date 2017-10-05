import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate{

  constructor(private _router: Router) { }
  
  //ActivatedRouteSnapshot przechowuje informacje o przekierowaniu na aktualny moment
  canActivate(route: ActivatedRouteSnapshot): boolean {
    let id = +route.url[1].path; //1 bo id jest drugie w tablicy
    if(isNaN(id) || (id < -1)){
        alert("Invalid product id");
        this._router.navigate(['/products']);
        return false;
    }
    return true;
  }
}
