var app = angular.module('todo', []);

app.controller('homeController', home);

function home() {
  var vm = this;
  vm.message = "To Do List:"
  vm.todos = [
    { name: "Item One", done: false},
    { name: "Item Two", done: false}
  ]
  vm.messageTwo = "No Items on Your To Do List."
}
