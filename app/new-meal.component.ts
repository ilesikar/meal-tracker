import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <h3>Blank template</h3>
  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
}
