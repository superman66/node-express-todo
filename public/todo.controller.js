/**
 * Created by superman on 2016/5/25.
 */
(function () {
    'use strict';

    angular.module('TodoApp', [])
        .controller('TodoController', ['TodoService', function (TodoService) {
            var vm = this;
            vm.todos = [];
            vm.todo = {
                content: ''
            };
            TodoService.todoList().success(function (data) {
                vm.todos = data;
            }).error(function (err) {
                console.log(err);
            })

            vm.createTodo = function (todo) {
                TodoService.createTodo(todo).success(function (data) {
                    vm.todos = data;
                    vm.todo.content = '';
                });
            };
            
            vm.delTodo = function (id) {
                TodoService.deleteTodo(id).success(function (data) {
                    vm.todos = data;
                })
            };

            vm.updateTodo = function(todo){
                // console.log(todo);
                TodoService.updateTodo(todo).success(function(data){
                    //vm.todos = data;
                })
            }

        }])
        .controller('')
    ;
})();