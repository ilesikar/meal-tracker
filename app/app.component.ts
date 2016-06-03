import { Component } from 'angular2/core';
import {} from '';

@Component({
  selector: 'my-app',
  template: `
    <div class="container">
      <h1>Meal Tracker!</h1>
      <h3>{{ Meal.name }}</h3>
    </div>
  `
})
//
export class AppComponent {
  // public meals: Meal[];  // Task[] (or Array<Task>) identifies tasks as an array of Task objects
  // constructor(){
  //   this.meals = [
  //     new Meal("Pizza.", "3 slices", 600),
  //     new Meal("Banana", "whole", 100)
  //   ];
  // }
}

export class MealTracker {
  public done: boolean = false;
  constructor(public name: string, public description: string, public calories: number) {}
}
