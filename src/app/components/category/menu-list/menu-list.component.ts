import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {MenuService} from "../../../services/menu.service";
import {Menu} from "../../../models/menu";

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  @Input() selectedCategory!: string;
  menuList!: Menu[];

  constructor(private menuService: MenuService) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.menuList = this.menuService.getMenuListByCategory(this.selectedCategory);
  }
}
