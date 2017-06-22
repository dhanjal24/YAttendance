var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/login", {
        templateUrl  : "login/login.html"
    })
    .when("/signup", {
        templateUrl : "signup/signup.html"
    })
    .otherwise({
        template : "<h1>Nothing</h1><p>Nothing has been selected</p>"
    });
});