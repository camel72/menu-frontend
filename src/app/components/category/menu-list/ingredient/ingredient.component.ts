import {Component, Input, OnInit} from '@angular/core';
import {Ingredient} from "../../../../models/ingredient";

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {

  @Input()
  ingredient!: Ingredient;

  constructor() {
  }

  ngOnInit(): void {
  }
}
