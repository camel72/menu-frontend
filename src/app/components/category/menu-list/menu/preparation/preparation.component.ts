import {Component, Input, OnInit} from '@angular/core';
import {Instruction} from "../../../../../models/instruction";

@Component({
  selector: 'app-preparation',
  templateUrl: './preparation.component.html',
})
export class PreparationComponent implements OnInit {

  @Input()
  preparation!: Instruction;

  constructor() {
  }

  ngOnInit(): void {
  }

}
