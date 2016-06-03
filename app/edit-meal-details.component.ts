import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['meal'],
  template `
  `
})

export class EditMealDetails.Component {
  public meal: Meal;
}
