/**
 * Created by superman on 2016/5/25.
 */
(function(){
    'use strict';

    angular.module('TodoApp', [])
        .factory('TodoService', ['$http', function(){
            var _getTodoList = function(){
                return $http.get('/api/todos');
            };
            var _createTodo = function(todo){
                return $http({
                    method : 'POST',
                    url : '/api/todo',
                    data : todo
                })
            };
            var _deleteTodo = function(id){
                return $http({
                    method : 'DELETE',
                    url : '/api/delete/' + id
                })
            };
            var _updateTodo = function(todo){
                return $http({
                    method : 'POST',
                    url : '/api/todo',
                    data : todo
                })
            };
            return {
                todoList : _getTodoList,
                createTodo : _createTodo,
                deleteTodo : _deleteTodo,
                updateTodo : _updateTodo
            }
        }])
        .controller('TodoController', ['TodoService', function(TodoService){
            var vm = this;
            TodoService.todoList().success(function(data){
                console.log(data);
            }).error(function(err){
                console.log(err);
            })
        }]);
})();