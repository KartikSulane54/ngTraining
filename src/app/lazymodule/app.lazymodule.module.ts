import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstComponent } from './components/app.firstcomponent.component';
import { SecondComponent } from './components/app.secondcomponent.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'app2', component: SecondComponent }
];

@NgModule({
  // registering the routes for child routing
  // through lazy load module
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [ RouterModule ],
  declarations: [
    FirstComponent,
    SecondComponent
  ],
  providers: [],
})
export class LazyModule { }
