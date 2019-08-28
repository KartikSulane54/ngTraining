import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-component',
  template:
  `
  <h3> I am the second Component froom the Lazy Module</h3>
  <a [routerLink]="['/lazy']"> Back To App 1 </a>
  `
})

export class SecondComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
