import { Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';
import { MealListComponent } from './meal-list.component';
import { AppComponent } from './app.component';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
    <h3>Add A Meal:</h3>
    <input placeholder="Name" class="col-sm-8 input-lg" #newName>
    <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
    <input placeholder="Calories" class="col-sm-8 input-lg" #newCalories>
    <button (click)="addMeal(newName, newDescription, newCalories)" class="btn-success btn-lg add-button">Add</button>
  </div>
  `
})

export class NewMealComponent {
  public mealList: Meal[];
  public onSubmitNewMeal: EventEmitter<Meal>;
  constructor() {
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userName: HTMLInputElement, newDescription: HTMLInputElement, newCalories: HTMLInputElement){
    var name = userName.value;
    var description = newDescription.value;
    var calories = parseInt(newCalories.value);
    var newMeal = new Meal(name, description, calories, this.mealList.length);
    this.onSubmitNewMeal.emit(newMeal);
    userName.value = "";
    newDescription.value = "";
    newCalories.value = "";
  }
}
