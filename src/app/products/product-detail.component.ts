import { Component, OnInit } from '@angular/core';
// For passing parameters through routerLink import activatedRoute
import { ActivatedRoute, Router } from '@angular/router';
// Creating a back button you will have to import an instance of the router

import { Location } from '@angular/common';

import { IProduct } from './product';


@Component({

  // the selector is not needed because the component is not going to nested within another component
  // we will use routing to display the page
  // selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: IProduct;

  // Instantiate an instance of the ActivatedRoute in the constructor to pass in the id.
  //  You will use the id to get the right product from IProduct
  constructor(private _route: ActivatedRoute, 
                  private _router: Router,
                  private _location: Location) { 

    //  This console log statements sends id to console just to take a look at it
    console.log(this._route.snapshot.paramMap.get('id'));
  }

  ngOnInit() {
    // Get the productId using snapshot approach, if you expect the product Id to change 
    //  or whatever value you are reading to change you would use the observable approach
    // the let variable is a scoped variable
    //  the + sign in front of this._route turns the string into a numeric Id 
    let pId = +this._route.snapshot.paramMap.get('id');
    
    this.pageTitle += `: ${pId}`;
    this.product = {
      "productId" : pId,
      "productName" : "Leaf Lake",
      "productCode" : "GDN-0011",
      "releaseDate" : "March 19, 2016",
      "description" : "Leaf rake with 48 inch handle",
      "price" : 19.95,
      "starRating" : 3.2,
      "imageUrl" : "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    }
    console.log('The product id is: ' + this.product.productId);
  }
    
  onBack(): void {

    console.log('Running onBack');
    // for(let i=0; i< 10000; i++){
    //     let p = i;
    //     console.log(i);
    // }
   // this._location.back();
    this._router.navigate(['/products']);
  }

}
