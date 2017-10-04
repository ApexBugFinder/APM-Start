import { Component } from '@angular/core';
import { ProductService } from "./products/product.service";


@Component({
  selector: 'pm-root',
  template: `
  <div><h1>{{pageTitle}}</h1>
    <pm-products></pm-products>
  </div>
  `,
  // Services added to app.component gives all the component's children access to the service 
  providers: [ ProductService ]
})

export class AppComponent {
  pageTitle: string = 'Acme Product Management'
}