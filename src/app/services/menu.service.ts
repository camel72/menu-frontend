import {Injectable} from "@angular/core";
import {Category} from "../models/category";
import {Menu} from "../models/menu";

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  categories: Category[];
  menuList: Menu[];

  constructor() {
    // TODO call rest service

    const pastaCategory: Category = {name: "Pasta"};
    const visCategory: Category = {name: "Vis"};
    const vleesCategory: Category = {name: "Vlees"};
    const vegetarischCategory: Category = {name: "Vegetarisch"};

    this.categories = [
      pastaCategory,
      visCategory,
      vleesCategory,
      vegetarischCategory
    ];

    this.menuList = [
      {
        name: "Spaghetti",
        category: pastaCategory,
        ingredients: [
          {name: "pasta", quantity: "500 gr."},
          {name: "water", quantity: "1,5 l"}]
      }
    ];
  }

  getCategories(): Category[] {
    return this.categories;
  }

  getMenuListByCategory(category: Category)  {
    let find = this.menuList.find(value => value.category.name == category.name);
    console.log("menuservice: menuLIst find : " );
  }
}
