var MealTracker;
(function (MealTracker) {
    var Meal = (function () {
        function Meal(name, description, calories) {
            this.name = name;
            this.description = description;
            this.calories = calories;
        }
        return Meal;
    }());
    var meals = [];
    meals.push(new Meal("Burger", "w/ avocado and bacon", 540));
    console.log(meals);
})(MealTracker || (MealTracker = {}));
//# sourceMappingURL=meal-tracker.js.map