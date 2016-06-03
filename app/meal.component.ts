import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
  <div>
    <div class="row"><h3><span class="col-sm-2">{{ meal.name }}</span> <span class="col-sm-2">{{ meal.description }}</span> <span class="col-sm-2">{{ meal.calories }}</span></h3>
  `
})

export class MealComponent {
  public meal: Meal;
}
