import { Component, OnInit } from '@angular/core';
import { Category, Categories } from './category.model';

@Component({
    selector: 'app-category-data',
    templateUrl: './category.html'
})
export class CategoryComponent implements OnInit {
    categories = Categories;
    categoryName: string;
    msg: string;
    constructor() {
        this.categoryName = '';
        this.msg = '';
     }
     selectCategory(c) {
         this.categoryName = c.categoryName;
     }

     getMessage($event) {
      this.msg = $event;
     }
    ngOnInit() { }
}
