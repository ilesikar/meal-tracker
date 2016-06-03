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
    MealTracker.Meal = Meal;
})(MealTracker || (MealTracker = {}));
//# sourceMappingURL=meal-tracker-classes-interfaces.js.map