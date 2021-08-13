import {Injectable} from "@angular/core";
import {Category} from "../models/category";

@Injectable({
  providedIn: 'root'
  })
export class CategoryService {
  categories : Category[];

  constructor() {
    // TODO call rest service
    this.categories = [
      new Category("Pasta"),
      new Category("Vis"),
      new Category("Vlees"),
      new Category("Varia"),
    ];
 }

  getCategories(): Category[]{
    return this.categories;
  }
}
