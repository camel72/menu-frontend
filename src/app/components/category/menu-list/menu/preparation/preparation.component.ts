import {Component, Input, OnInit} from '@angular/core';
import {Preparation} from "../../../../../models/preparation";

@Component({
  selector: 'app-preparation',
  templateUrl: './preparation.component.html',
})
export class PreparationComponent implements OnInit {

  @Input()
  preparation!: Preparation;

  constructor() {
  }

  ngOnInit(): void {
  }

}
