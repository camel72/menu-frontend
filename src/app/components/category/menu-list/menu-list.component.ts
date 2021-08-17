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
  //menuList: Menu[];


  constructor(private menuService: MenuService) {
    console.log("in constructor menu-list");
    this.selectedCategory = {name: ""};
    //this.menuList = menuList;
  }

  ngOnInit(): void {
    console.log("in oninit menu-list");
  }

  ngOnChanges(changes: SimpleChanges){
    console.log("change occurred:" + this.selectedCategory);
    // TODO return type
    this.menuService.getMenuListByCategory(this.selectedCategory);
  }
}
