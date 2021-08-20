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

  getMenuListByCategory(category: Category) : Menu[]  {
    console.log("category" + category.name);
    //value.category.name === category.name
    let find: Menu[] = this.menuList.filter(value =>  console.log(value.category.name === category.name));
    // value.category.name === category.name
    //console.log("menuservice: menuLIst find : " + find.forEach(value => console.log(value)));
    return find;
  }
}
