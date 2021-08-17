import {Component, Input, OnInit} from '@angular/core';
import {Category} from "../../../models/category";
import {CategoryService} from "../../../services/category.service";

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  @Input() selectedCategory: Category

  constructor(private categoryService: CategoryService) {
    this.selectedCategory = new Category("test");
  }

  ngOnInit(): void {
  }

}
