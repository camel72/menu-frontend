import { Component, OnInit } from '@angular/core';
import {FormGroup, FormGroupDirective} from "@angular/forms";

@Component({
  selector: 'app-new-name',
  templateUrl: './new-name.component.html'
})
export class NewNameComponent implements OnInit {

  newMenuForm!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {
  }

  ngOnInit(): void {
    this.newMenuForm = this.rootFormGroup.control;
  }

  get menuNameForm(): FormGroup {
    return this.newMenuForm.get('menuNameForm') as FormGroup;
  }
}
