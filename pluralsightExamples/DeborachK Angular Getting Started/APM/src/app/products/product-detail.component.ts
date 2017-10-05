import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  //selector: 'pm-product-detail', Nie potrzebujemy selektora bo będziemy użwali tego komponentu w procesie routingu
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
    pageTitle: string = 'Product Detail';
    product: IProduct;
    errorMessage: string;
  
    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _productService: ProductService) { }

    ngOnInit() {
        const id = +this._route.snapshot.paramMap.get('id'); //Plusik na początku konwertuje stringa na number
        this.getProduct(id);
    }

    getProduct(id:number): void {
        this._productService.getProduct(id).subscribe(product => this.product = product, 
                                                    error => this.errorMessage = <any>error);
    }

    onBack(): void {
        this._router.navigate(['/products']);
    }

}
