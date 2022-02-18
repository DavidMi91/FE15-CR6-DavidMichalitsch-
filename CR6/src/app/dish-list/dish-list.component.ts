import { Component, OnInit } from '@angular/core';
import { dishes } from '../dishes';
import { Idishes } from '../Idishes';

@Component({
  selector: 'dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {
  dishes: Idishes[] = dishes;
  constructor() { }

  ngOnInit(): void {
  }

}
