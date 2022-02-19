
import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'hero',
 templateUrl: './hero.component.html',
 styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
 heroHeading: string =  "Valentino";
 heroText: string  =  "Delivering outstanding food to outstanding customers!";
 heroBtnText: string =  "Our menu";

 constructor() {}

 ngOnInit(): void {
 }

}