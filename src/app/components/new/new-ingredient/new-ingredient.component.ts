import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-ingredient',
  templateUrl: './new-ingredient.component.html'
})
export class NewIngredientComponent implements OnInit {

  newMenuForm!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {
  }

  ngOnInit(): void {
    this.newMenuForm = this.rootFormGroup.control;
    this.onAddIngredient();
  }


  get ingredients(): FormArray {
    return this.newMenuForm.get('ingredientsForm.ingredients') as FormArray;
  }


  onAddIngredient() {
    this.ingredients.push(new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$')])
      })
    );
  }

  onDeleteIngredient(i: number) {
    this.ingredients.removeAt(i);
  }
}
