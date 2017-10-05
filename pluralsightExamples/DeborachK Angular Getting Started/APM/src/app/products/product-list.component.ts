import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: './product-list.component.html',
    styleUrls : ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    _listFilter: string;
    errorMessage: string;
    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    filteredProducts: IProduct[];
    products: IProduct[] = [];

    constructor(private _productService: ProductService) { 
    
    }

    ngOnInit() {
        this._productService.getProducts().subscribe(
            products => {
                this.products = products
                this.filteredProducts = this.products;
            },
            error => this.errorMessage = <any>error,
            function(){
                console.log("Obiekt z produkatmi został w pełni załadowany");
            }
        );
        this.filteredProducts = this.products;
    }

    toggleImage():void {
        this.showImage = !this.showImage;
    }

    performFilter(filterBy: string) : IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => 
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    onRatingClicked(value:string): void {
        this.pageTitle = 'Product List ' + value;
    }
}