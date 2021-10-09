import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import { CategoryComponent } from './components/category/category.component';
import { HomeComponent } from './components/home/home.component';
import { NewComponent } from './components/new/new.component';
import { MenuListComponent } from './components/category/menu-list/menu-list.component';
import { IngredientComponent } from './components/category/menu-list/menu/ingredient/ingredient.component';
import { MenuComponent } from './components/category/menu-list/menu/menu.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PreparationComponent } from './components/category/menu-list/menu/preparation/preparation.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CategoryComponent,
    HomeComponent,
    NewComponent,
    MenuListComponent,
    IngredientComponent,
    MenuComponent,
    PreparationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
