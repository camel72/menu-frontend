import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {Category} from "../../../models/category";
import {MenuService} from "../../../services/menu.service";
import {Menu} from "../../../models/menu";


@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  @Input() selectedCategory: Category;
  menuList: Menu[];


  constructor(private menuService: MenuService) {
    console.log("in constructor menu-list");
    this.selectedCategory = {name:"Spaghetti"};
    console.log("type"  + typeof this.selectedCategory);
    this.menuList = [];
  }

  ngOnInit(): void {
    console.log("in oninit menu-list");
    console.log("cat:" + this.selectedCategory)
  }

  ngOnChanges(changes: SimpleChanges){
    console.log( typeof this.selectedCategory);
    console.log("change occurred cat:" + this.selectedCategory.name);
    // TODO return type
    this.menuList = this.menuService.getMenuListByCategory(this.selectedCategory);
  }
}
