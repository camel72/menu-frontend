import {Component, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ReplaySubject, Subscription} from "rxjs";
import {Category} from "../../models/category";
import {MenuService} from "../../services/menu.service";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  selectedCategory: Category
  changeCategorySubscription: Subscription;

  constructor(private _activatedRoute: ActivatedRoute) {
    this.selectedCategory = {name: ""};
    this.changeCategorySubscription = new Subscription();
  }

  ngOnInit(): void {
    this.changeCategorySubscription = this._activatedRoute.params.subscribe(
      params => {
          this.selectedCategory = params['item'];
        }
      );
  }

  ngOnDestroy(): void {
    this.changeCategorySubscription.unsubscribe();
  }
}
