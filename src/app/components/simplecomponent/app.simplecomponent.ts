// 1. importing component class from @angular/core
import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-component',
  templateUrl: './app.simplecomponent.view.html'
})
export class SimpleComponent {
  msg: string;
  url: string;
  name: string;
  constructor() {
    this.msg = 'Hello Angular !',
    this.url = 'http://dotnetcurry.com';
    this.name = '';
  }

  display(): void {
    this.msg = 'The Angular is Great !!!';
  }
}
