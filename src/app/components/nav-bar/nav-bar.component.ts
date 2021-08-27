import {Component, OnInit, Output} from '@angular/core';
import {Category} from "../../models/category";
import {MenuService} from "../../services/menu.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  items!: Category[];
  menuService : MenuService;

  constructor(menuService: MenuService) {
    this.menuService = menuService;
  }

  ngOnInit(): void {
    this.items = this.menuService.getCategories();
  }
}
