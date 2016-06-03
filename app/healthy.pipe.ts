import { Pipe, PipeTransform } from 'angular2/core';
import { Task } from './task.model';

@Pipe({

})
export class HealthyPipe implements PipeTransform {
  transform(input: Meal[], args) {
    var desiredHealthyState = args[0];
    if(desiredHealthyState === "healthy") {
      return input.filter(function(meal) {
        return meal.healthy;
      });
    } else if (desiredHealthyState === "unhealthy") {
      return input.filter(function(meal) {
        return !meal.healthy;
      })
    } else {
      return input;
    }
  }
}
