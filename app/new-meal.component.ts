import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
    <h3>Add A Meal:</h3>
    <input placeholder="Name" class="col-sm-8 input-lg" #newName>
    <button (click)="addMeal(newName)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userName: HTMLInputElement){
    var newMeal = new Meal(userName.value, "description", 500);
    this.onSubmitNewMeal.emit(userName.value);
    userName.value = "";
  }
}
