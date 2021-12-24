import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, FormGroupDirective, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-instruction',
  templateUrl: './new-instruction.component.html'
})
export class NewInstructionComponent implements OnInit {

  newMenuForm!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {
  }

  ngOnInit(): void {
    this.newMenuForm = this.rootFormGroup.control;
    this.onAddInstruction();
  }

  get instructions(): FormArray {
    return this.newMenuForm.get('instructionsForm.instructions') as FormArray;
  }

  onAddInstruction() {
    this.instructions.push(new FormGroup({
        instruction: new FormControl(null, Validators.required),
      })
    );
  }

  onDeleteInstruction(i: number) {
    this.instructions.removeAt(i);
  }
}
