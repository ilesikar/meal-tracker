import { Component, EventEmitter } from 'angular2/core';
// import {} from '';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Meal Tracker!</h1>
      <h3 *ngFor="#meal of meals" (click)="mealWasSelected(meal)">{{ meal.name }}</h3>
    </div>
  `
})

export class AppComponent {
  public meals: Meal[];  // Task[] (or Array<Task>) identifies tasks as an array of Task objects
  constructor(){
    this.meals = [
      new Meal("Pizza", "3 slices", 600),
      new Meal("Banana", "whole", 100)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log(clickedMeal);
  }
}

export class Meal {
  constructor(public name: string, public description: string, public calories: number) {}
}
