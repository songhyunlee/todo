var app = angular.module('todo', []);

app.controller('homeController', home);

function home() {
  var vm = this;
  vm.message = "Hello world."
  vm.todos = [
    { name: "Item One"},
    { name: "Item Two"}
  ]
}
