import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template: `
    <div class="meal-form">
      <h3>Edit Meal: {{ meal.name }}</h3>
      <input [(ngModel)]="meal.name" class="col-sm-8 input-lg meal-form"/>
    </div>
  `
})

export class EditMealDetailsComponent {
  public meal: Meal;
}
