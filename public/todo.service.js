/**
 * Created by superman on 2016/5/30.
 */
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
    .factory('UserService', ['$http', function ($http) {
        var _reg = function (user) {
            return $http({
                method: 'POST',
                url: '/api/register',
                data: user
            })
        }
    }]);