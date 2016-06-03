import { Component, EventEmitter } from 'angular2/core';
import {MealListComponent} from './meal-list.component';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Meal Tracker!</h1>
      <meal-list [mealList]="meals" (onMealSelect)="mealWasSelected($event)">
      </meal-list>
    </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Pizza", "3 slices", 600),
      new Meal("Banana", "whole", 100)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log('parent', clickedMeal);
  }
}

export class Meal {
  constructor(public name: string, public description: string, public calories: number) {}
}
