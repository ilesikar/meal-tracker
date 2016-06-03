module MealTracker {
  interface IMeal {
    name: string;
    description: string;
    calories: number;
  }

  class Meal implements IMeal {
    constructor(public name: string, public description: string, public calories: number){}
  }

  var meals = [];
  meals.push(new Meal("Burger", "w/ avocado and bacon", 540));

  console.log(meals);
}
