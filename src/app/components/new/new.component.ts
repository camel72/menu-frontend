import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html'
})
export class NewComponent implements OnInit {
  //step: number = 1;

  newMenuForm = new FormGroup({
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

  ngOnInit(): void {
  }

  onSubmit() {
    // if (this.newMenuForm.controls.menuNameForm.invalid && this.step == 1) {
    //   return;
    // }
    // if (this.newMenuForm.controls.ingredientsForm.invalid && this.step == 2) {
    //   return;
    // }
    // if (this.newMenuForm.controls.instructionsForm.invalid && this.step == 3) {
    //   return;
    // }
    // this.step = this.step + 1;
  }

  // previous() {
  //   this.step = this.step - 1;
  // }
}
