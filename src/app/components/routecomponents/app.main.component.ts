import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  template: `
    <div class="container card card-body">
      <h2>The Main Component</h2>
      <h5><u>The Angular SPA </u></h5>
      <table class="table table-striped">
        <tr>
          <td>
            <a [routerLink]="['']">Home</a>
          </td>

          <td>
            <a [routerLink]="['about']">About</a>
          </td>

          <td>
            <a [routerLink]="['contact']">Contact</a>
          </td>

          <td>
            <a [routerLink]="['lazy']">Lazy Here</a>
          </td>
        </tr>
      </table>
      <hr/>
      <router-outlet></router-outlet>
    </div>
  `
})
export class MainComponent implements OnInit {
  message: string;
  constructor() {
    // this.message = 'The Main Commpoent';
  }

  ngOnInit() {}
}
