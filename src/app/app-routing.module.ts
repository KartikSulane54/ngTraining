import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/routecomponents/app.home.component';
import { ContactComponent } from './components/routecomponents/app.contact.component';
import { AboutComponent } from './components/routecomponents/app.about.component';
import { StudentComponent } from './studentcomponent/app.student-component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'contact', component: ContactComponent,
    children: [
      { path: 'student', component: StudentComponent },
    ]
  },
  {
    path: 'lazy', loadChildren: './lazymodule/app.lazymodule.module#LazyModule'
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  // registering the route table in the root of the containing application
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
