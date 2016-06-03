module MealTracker {
  export interface IMeal {
    name: string;
    description: string;
    calories: number;
  }

  export class Meal implements IMeal {
    constructor(public name: string, public description: string, public calories: number){}
  }
}
