import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/app.product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url: string;
  // inject the HttpClient in Service Constructor
  // the HttpClient injection will be resolved by
  // the HttpClientModule imported inside the  @NgModule

  constructor(private http: HttpClient) {
    this.url = 'http://apiapptrainingservice.azurewebsites.net/api/products';
  }

  getData(): Observable<Product[]> {
    let resp: Observable<Product[]> = null;
    resp = this.http.get<Product[]>(this.url);
    return resp;
  }

  postData(prd: Product): Observable<Product> {
    let resp: Observable<Product> = null;
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    resp = this.http.post<Product>(this.url, JSON.stringify(prd), options);
    return resp;
  }

  putData(id: number, prd: Product): Observable<Product> {
    let resp: Observable<Product> = null;
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    // passing URL and Id with template string
    resp = this.http.put<Product>(`${this.url}/${id}`, JSON.stringify(prd), options);
    return resp;
  }
}
