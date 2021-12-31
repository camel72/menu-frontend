import {Category} from "./category";
import {Ingredient} from "./ingredient";
import {Instruction} from "./instruction";

export interface Menu {
  name: String;
  category: Category;
  ingredients: Ingredient[];
  instructions: Instruction[];
}
