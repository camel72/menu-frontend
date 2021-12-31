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
        name: "pasta1",
        category: pastaCategory,
        ingredients: [
          {name: "pasta1_ingredient1", quantity: "1"},
          {name: "pasta2_ingredient1", quantity: "2"}],
        instructions: [
          {action: "first action pasta 1"},
          {action: "second action pasta 1"},
          {action: "third action pasta 1"}
        ]
      },
      {
        name: "pasta2",
        category: pastaCategory,
        ingredients: [
          {name: "pasta2_ingredient1", quantity: "1"},
          {name: "pasta2_ingredient2", quantity: "2"}
        ],
        instructions: [
          {action: "first action pasta 2"},
          {action: "second action pasta 2"},
          {action: "third action pasta 2"}
        ]
      },
      {
        name: "Vis1",
        category: visCategory,
        ingredients: [
          {name: "vis1_ingredient1", quantity: "1"},
          {name: "vis1_ingredient2", quantity: "2"}
        ],
        instructions: [
          {action: "first action vis1"},
          {action: "second action vis1"},
          {action: "third action vis1"}
        ]
      },
      {
        name: "Vis2",
        category: visCategory,
        ingredients: [
          {name: "vis2_ingredient1", quantity: "1"},
          {name: "vis2_ingredient2", quantity: "2"}
        ],
        instructions: [
          {action: "first action vis2"},
          {action: "second action vis2"},
          {action: "third action vis3"}
        ]
      },
      {
        name: "Vlees1",
        category: vleesCategory,
        ingredients:
          [
            {name: "vlees1_ingredient1", quantity: "1"},
            {name: "vlees2_ingredient1", quantity: "2"}
          ],
        instructions: [
          {action: "first action vlees1"},
          {action: "second action vlees1"},
          {action: "third action vlees1"}
        ]
      },
      {
        name: "vlees2",
        category: vleesCategory,
        ingredients: [
          {name: "vlees2_ingredient1", quantity: "1"},
          {name: "vlees2_ingredient2", quantity: "2"},
          {name: "vlees3_ingredient3", quantity: "3"}
        ],
        instructions: [
          {action: "first action vlees2"},
          {action: "second action vlees2"},
          {action: "third action vlees2"}
        ]
      },
      {
        name: "vegetarisch1",
        category: vegetarischCategory,
        ingredients:
          [
            {name: "vegetarisch1_ingredient1", quantity: "1"},
            {name: "vegetarisch2_ingredient2", quantity: "2"},
          ],
        instructions: [
          {action: "first action vegetarisch1"},
          {action: "second action vegetarisch1"},
          {action: "third action vegetarisch1"}
        ]
      }
      ,
      {
        name: "vegetarisch2",
        category: vegetarischCategory,
        ingredients: [
          {name: "veg2_ingredient1", quantity: "1 stuk"},
          {name: "veg2_ingredient2", quantity: "1 stuk"}
        ],
        instructions: [
          {action: "first action vegetarisch2"},
          {action: "second action vegetarisch2"},
          {action: "third action vegetarisch2"}
        ]
      }
    ]
  }

  getCategories(): Category[] {
    return this.categories;
  }

  getMenuListByCategory(category: string): Menu[] {
    return this.menuList.filter(value => value.category.name === category);
  }
}
