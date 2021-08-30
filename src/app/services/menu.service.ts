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
      },
      {
        name: "pasta2",
        category: pastaCategory,
        ingredients: [
          {name: "pasta2_ingredient1", quantity: "1"},
          {name: "pasta2_ingredient2", quantity: "2"}]
      },
      {
        name: "Mosselen",
        category: visCategory,
        ingredients: [
          {name: "water", quantity: "half glas"},
          {name: "mosselen", quantity: "1kg"}
        ]
      },
      {
        name: "Vis2",
        category: visCategory,
        ingredients: [
          {name: "vis2_ingredient1", quantity: "1"},
          {name: "vis2_ingredient2", quantity: "2"}
        ]
      },
      {
        name: "Hamburgers",
        category: vleesCategory,
        ingredients: [
          {name: "filet américan pur", quantity: "400 gr"}
        ]
      },
      {
        name: "vlees2",
        category: vleesCategory,
        ingredients: [
          {name: "vlees2_ingredient1", quantity: "1"},
          {name: "vlees2_ingredient2", quantity: "2"},
          {name: "vlees3_ingredient3", quantity: "3"}
        ]
      },
      {
        name: "pompoenburgers",
        category: vegetarischCategory,
        ingredients: [
          {name: "pompoen", quantity: "1 stuk"},
          {name: "chili peper", quantity: "1 stuk"}
        ]
      },
      {
        name: "vegetarisch2",
        category: vegetarischCategory,
        ingredients: [
          {name: "veg2_ingredient1", quantity: "1 stuk"},
          {name: "veg2_ingredient2", quantity: "1 stuk"}
        ]
      }
    ];
  }

  getCategories(): Category[] {
    return this.categories;
  }

  getMenuListByCategory(category: string): Menu[] {
    return this.menuList.filter(value => value.category.name === category);
  }
}
