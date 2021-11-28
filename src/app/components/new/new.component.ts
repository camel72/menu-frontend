import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  step: number = 1;
  menuMultiStepForm = new FormGroup({
    menuNameForm: new FormGroup({
      menuName: new FormControl(null, Validators.required)
    }),
    ingredientsForm: new FormGroup({
      ingredients: new FormArray([])
    }),
    instructionsForm: new FormGroup({
      instructions: new FormArray([])
    })
  })

  constructor() {
  }

  get ingredients(): FormArray {
    return this.menuMultiStepForm.get('ingredientsForm.ingredients') as FormArray;
  }

  get instructions(): FormArray {
    return this.menuMultiStepForm.get('instructionsForm.instructions') as FormArray;
  }

  onAddIngredient() {
    this.ingredients.push(new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, Validators.required)
      })
    );
  }

  onAddInstruction() {
    this.instructions.push(new FormGroup({
      instruction: new FormControl(null, Validators.required),
    })
    );
  }

  ngOnInit(): void {
    this.ingredients.push(new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, Validators.required)
      })
    );
  }

  onSubmit() {
    console.log('in submit');
    if (this.menuMultiStepForm.controls.menuNameForm.invalid && this.step == 1) {
      console.log('invalid');
      return;
    }
    if (this.menuMultiStepForm.controls.ingredientsForm.invalid && this.step == 2) {
      return;
    }
    if (this.menuMultiStepForm.controls.instructionsForm.invalid && this.step == 3) {
      return;
    }
    this.step = this.step + 1;
  }

  onDeleteIngredient(i: number) {
    this.ingredients.removeAt(i);
  }

  onDeleteInstruction(i: number) {
    this.instructions.removeAt(i);
  }

  previous() {
    this.step = this.step - 1;
  }
}
