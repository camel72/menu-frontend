import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";
import {Category} from "../../models/category";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  selectedCategory: Category
  sub: Subscription;

  constructor(private _activatedRoute: ActivatedRoute) {
    this.selectedCategory = new Category("");
    this.sub = new Subscription();
  }

  ngOnInit(): void {
    this.sub = this._activatedRoute.params
      .subscribe(params => {
          this.selectedCategory = params['item'];
          console.log(this.selectedCategory);
        }
      );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
