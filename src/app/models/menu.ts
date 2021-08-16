import {Category} from "./category";
import {Ingredient} from "./ingredient";

export interface Menu {
  name: String;
  category: Category;
  ingredients: Ingredient[];


}
