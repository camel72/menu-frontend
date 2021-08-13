import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CategoryComponent} from "./components/category/category.component";
import {HomeComponent} from "./components/home/home.component";
import {NewComponent} from "./components/new/new.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'new',
    component: NewComponent
  },
  {
    path: 'category',
    component: CategoryComponent
  },
  {
    path: 'category/:item',
    component: CategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
