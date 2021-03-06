System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var HealthyPipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HealthyPipe = (function () {
                function HealthyPipe() {
                }
                HealthyPipe.prototype.transform = function (input, args) {
                    console.log('selected meal:', args[1]);
                    var desiredHealthyState = args[0];
                    if (desiredHealthyState === "healthy") {
                        return input.filter(function (meal) {
                            return meal.healthy;
                        });
                    }
                    else if (desiredHealthyState === "unhealthy") {
                        return input.filter(function (meal) {
                            return !meal.healthy;
                        });
                    }
                    else {
                        return input;
                    }
                };
                HealthyPipe = __decorate([
                    core_1.Pipe({
                        name: "healthy",
                        pure: false
                    }), 
                    __metadata('design:paramtypes', [])
                ], HealthyPipe);
                return HealthyPipe;
            }());
            exports_1("HealthyPipe", HealthyPipe);
        }
    }
});
//# sourceMappingURL=healthy.pipe.js.map