import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import { HealthyPipe } from './healthy.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [HealthyPipe],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  template: `
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all" selected="selected">Show All</option>
      <option value="healthy">Show Healthy<option>
      <option value="unhealthy">Show Unhealthy</option>
    </select>
    <meal-display *ngFor="#currentMeal of mealList | healthy:filterHealthy"
      (click)="mealClicked(currentMeal)"
      [class.selected]="currentMeal === selectedMeal"
      [meal]="currentMeal">
    </meal-display>
    <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal">
    </edit-meal-details>
    <new-meal (onSubmitNewMeal)="createMeal($event)" [mealList]="mealList"></new-meal>
  `
})
export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterHealthy: string = "all";
  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }

  createMeal(name: string, description: string, calories: number): void {
    this.mealList.push(
      new Meal(name, description, calories, this.mealList.length)
    );
  }
  onChange(filterOption) {
    this.filterHealthy = filterOption;
  }
}
