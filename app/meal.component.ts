@Component({
  selector: 'meal-dispay',
  inputs: ['meal'],
  template: `
  <h3>{{ meal.name }}</h3>
  `
})
export class MealComponent {
  public meal: Meal;
}
