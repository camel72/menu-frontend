import {Category} from "./category";
import {Ingredient} from "./ingredient";
import {Preparation} from "./preparation";

export interface Menu {
  name: String;
  category: Category;
  ingredients: Ingredient[];
  preparations: Preparation[];
}
