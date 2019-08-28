import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  template: `
  <h1>I am the default component from the Lazy Module</h1>
  <a [routerLink]="['app2']">Go To App 2</a>
  <br/>
  <router-outlet></router-outlet>
  `
})

export class FirstComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
