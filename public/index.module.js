/**
 * Created by superman on 2016/5/25.
 */
(function () {
    'use strict';

    angular.module('TodoApp', [])
        .factory('TodoService', ['$http', function ($http) {
            var _getTodoList = function () {
                return $http.get('/api/todos');
            };
            var _createTodo = function (todo) {
                return $http({
                    method: 'POST',
                    url: '/api/todo',
                    data: todo
                })
            };
            var _deleteTodo = function (id) {
                return $http({
                    method: 'DELETE',
                    url: '/api/todo/' + id
                })
            };
            var _updateTodo = function (todo) {
                return $http({
                    method: 'PUT',
                    url: '/api/todo/' + todo._id,
                    data: todo
                })
            };
            return {
                todoList: _getTodoList,
                createTodo: _createTodo,
                deleteTodo: _deleteTodo,
                updateTodo: _updateTodo
            }
        }])
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

        }]);
})();