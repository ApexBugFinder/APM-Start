import { Injectable } from "@angular/core";
import { IProduct } from "./product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/throw';



//Add Injectable decorator to make this class a service and import from angular/core
@Injectable()
export class ProductService {
        
    // Add a private string for the URL where the data is located
    private _productUrl = './api/products/products.json';
    // Add a contructor so that upon creation the class is instantiated with HTTPClient
    constructor(private _http: HttpClient){
      
    }

    //HARD CODED DATA
    // Class only has one method to provide the product list, managing and manipulation of this data is done by the component
    // in which this service is injected 
    //getProducts(): IProduct[] {

    //     return [
    //        {
    //     "productId": 1,
    //     "productName": "Leaf Rake",
    //     "productCode": "GDN-0011",
    //     "releaseDate": "March 19, 2016",
    //     "description": "Leaf rake with 48-inch wooden handle.",
    //     "price": 19.95,
    //     "starRating": 3.2,
    //     "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    // },
    // {
    //     "productId": 2,
    //     "productName": "Garden Cart",
    //     "productCode": "GDN-0023",
    //     "releaseDate": "March 18, 2016",
    //     "description": "15 gallon capacity rolling garden cart",
    //     "price": 32.99,
    //     "starRating": 4.2,
    //     "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    // },
    // {
    //     "productId": 5,
    //     "productName": "Hammer",
    //     "productCode": "TBX-0048",
    //     "releaseDate": "May 21, 2016",
    //     "description": "Curved claw steel hammer",
    //     "price": 8.9,
    //     "starRating": 4.8,
    //     "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    // }
    //     ];
    //  }
    

    // DATA FROM SERVER LOCATION
    getProducts(): Observable<IProduct[]> {
    //HttpClient get method uses generics to help map the information on the server to the interface IProduct, 
    // so that you get an array of IProduct objects instead of just data
    return this._http.get<IProduct[]>(this._productUrl)
        // do operator can allow you to peak or manipulate the response data for checking for errors
        .do(data => console.log('All: ' + JSON.stringify(data)))
        // the catch operator grabs any errors that are shown
        .catch(this.handleError);
    }
    
    //This private message handle the error thrown
    // Logs error to console and throws it to the encapsulating code
    private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
    
}