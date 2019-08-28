// import all std modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// import all custom components,directives, services and pipes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SimpleComponent } from './components/simplecomponent/app.simplecomponent';
import { StudentComponent } from './studentcomponent/app.student-component';
import { ProductComponent } from './components/productcomponent/app.product.component';
import { CategoryComponent } from '../app/intercom/Category.component';
import { ProductsComponent } from '../app/intercom/Product.component';
import { HomeComponent } from './components/routecomponents/app.home.component';
import { AboutComponent } from './components/routecomponents/app.about.component';
import { MainComponent } from './components/routecomponents/app.main.component';
import { ContactComponent } from './components/routecomponents/app.contact.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleComponent,
    StudentComponent,
    ProductComponent,
    CategoryComponent,
    ProductsComponent,
    HomeComponent,
    AboutComponent,
    MainComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
