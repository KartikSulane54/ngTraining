import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-component',
  template: `<h2>The about Component</h2>
      <div> {{message}} </div>
  `
})

export class AboutComponent implements OnInit {
  message: string;
  constructor() {
    this.message = 'The about Commpoent';
  }

  ngOnInit() { }
}
