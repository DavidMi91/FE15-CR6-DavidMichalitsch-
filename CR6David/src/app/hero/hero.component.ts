
import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'hero',
 templateUrl: './hero.component.html',
 styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
 heroHeading: string =  "Code Factory";
 heroText: string  =  "The demand to teach coding as a modern language in schools is also voiced on a state-level both here and abroad. The realization of this goal, to have a high-quality and standardized IT-education in the curriculum, is still a long way off though.";
 heroBtnText: string =  "Learn more";
 heroBtnUrl: string =  "https://codefactory.wien";

 constructor() {}

 ngOnInit(): void {
 }

}