import {Component, OnInit, Output} from '@angular/core';
import {Category} from "../../models/category";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Output() items: Category[];
  categoryService : CategoryService;

  constructor(categoryService: CategoryService) {
    this.categoryService = categoryService;
    this.items = [];
  }

  ngOnInit(): void {
    this.items = this.categoryService.getCategories();
  }

  // selectCategory(item: string) {
  //   console.log("in select category");
  // }
}
