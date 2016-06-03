import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
  <h3>Add A Meal:</h3>
  <input placeholder="Name" class="col-sm-8 input-lg">
  <button (click)="addTask()">Add</button>
  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
}
