import { Component, EventEmitter } from 'angular2/core';
// import {} from '';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  template: `
  <h3 *ngFor="#currentMeal of mealList" (click)="mealClicked(currentMeal)">
    {{ currentMeal.name }}
  </h3>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    console.log('child', clickedMeal);
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
}

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Meal Tracker!</h1>
      <meal-list [mealList]="meals" (onTaskSelect)="taskWasSelected($event)">
      </meal-list>
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
    console.log('parent', clickedMeal);
  }
}

export class Meal {
  constructor(public name: string, public description: string, public calories: number) {}
}
