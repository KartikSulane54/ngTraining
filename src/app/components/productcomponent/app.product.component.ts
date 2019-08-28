import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/app.product.model';
import { Categories, Manufacturers } from '../../models/app.constants';
import { ProductService } from '../../services/app.product.service';

@Component({
  selector: 'app-product-component',
  templateUrl: './app.product.component.view.html'
})
export class ProductComponent implements OnInit {

  product: Product;
  products: Product[];
  headers: string[];
  message: string;

  categories = Categories;
  manufacturers = Manufacturers;

  // Inject the ProductService as Constructor Injection in
  // the current component class
  constructor(private serv: ProductService) {
    this.product = new Product(0, '', '', '', '', '', 0);
    this.products = new Array<Product>();
    this.message = '';
    this.headers = Array<string>();
  }

  // Logic for external subscription
  // in ngOnInit()  method
  ngOnInit(): void {
    // tslint:disable-next-line: forin
    for (const p in this.product) {
      this.headers.push(p);
    }

    this.serv.getData()
      .subscribe((resp) => { this.products = resp; this.message = 'Success'; },
      (error) => {
        this.message = `Failure ${error}`;
      });
  }

  clear(): void {
    this.product =  new Product(0, '', '', '', '', '', 0);
  }

  save() {
    this.serv.postData(this.product).subscribe(
      (resp) => { this.product = resp; this.products.push(resp); this.message = 'Call Succes'; },
      (error) => { this.message = `Failed Call ${error}`; }
    );
  }
}

