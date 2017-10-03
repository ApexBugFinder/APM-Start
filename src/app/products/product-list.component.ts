import { Component, OnInit } from '@angular/core';
import { IProduct } from "./product";
import { ProductService } from "./product.service";
import { stringify } from "querystring";


@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    //Encapuslated unique style sheet
    styleUrls: ['./product-list.component.css']
})




export class ProductListComponent implements OnInit{



    // Properties
    // ---------------------------------------
    pageTitle: string = 'Product List';
    // Image Dimensions and toggle boolean
    showImage: boolean = false;
    imageWidth: number = 50;
    imageMargin: number = 2;

    // List Filter

    

    // Products to display

     _listFilter: string = '';
    get listFilter(): string{
        return this._listFilter;
    }
    set listFilter(value: string){
        this._listFilter = value;
        this.filteredProducts = this._listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    // Products to display using the interface IProduct
    products: IProduct[] = [];

   // filter Product List
   filteredProducts: IProduct[];

    // METHODS
    // ---------------------------------
    constructor(private _productService: ProductService) {
        //this.filteredProducts = this.products;
        this.listFilter = this._listFilter;
    }

    // method used when ratingClicked event is triggered
    onRatingClicked(message: string, message2: string): void {
        this.pageTitle = 'Product List: ' + message + ' ' + message2;
    } 

    // Method to toggle product image on and off - used by the Show buttom
    toggleImage(): void {
        this.showImage = !this.showImage;

    }
    // LifeCyle Hook: Method required to implement OnInit class.  Gives you a chance to have values initialized when the class is first initialized
     ngOnInit(): void {
        console.log('In OnInit');
        //Use OnInit LifeCyle Hook to initialize data from ProductService
        this.products = this._productService.getProducts();
        console.log(JSON.stringify(this.products));
        //moved from constructor because the constructor gets run before ngOnInit so therefore this.products
        // will be empty when assigning it to the this.filteredProducts
        this.filteredProducts = this.products;
        console.log(JSON.stringify(this.filteredProducts));
        this.listFilter = this._listFilter;
    }

    // Filters the products list by the filterBy string
    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => 
            product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }
}