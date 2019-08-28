import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Product, Products} from './product.model';


@Component({
    selector: 'app-product-data',
    templateUrl: './product.html'
})
export class ProductsComponent implements OnInit {
    products = Products;
    // tslint:disable-next-line: variable-name
    _filterProduct: Array<Product>;
    // tslint:disable-next-line: variable-name
    _categoryName: string;

  @Output()
  notify: EventEmitter<string>;

  @Input()
  set categoryName(cname: string) {
    this._categoryName = (cname && cname.trim()) || 'No Category Selected';
  }
  get categoryName() {
      return this._categoryName;
  }

    constructor() {
         this._filterProduct = new Array< Product >();
        //  console.log('Product');
         this.notify = new EventEmitter<string>();
    }

  get filterProducts() {
           this._filterProduct = new Array< Product >();
           for (const e of Products) {
            // tslint:disable-next-line: triple-equals
            if (e.categoryName == this._categoryName) {
                this._filterProduct.push(e);

            }
        }
           return this._filterProduct;
    }

    ngOnInit() {  }

    emitter() {
      this.notify.emit(`${this.categoryName} Received`);
    }
}
