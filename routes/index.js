var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');

router.get('/', function(req, res){
    res.sendfile('./views/index.html');
});

/* restful api */
//get all todo
router.get('/api/todos', function(req, res, next){
    Todo
        .find()
        .sort('-update_at')
        .exec(function(err, todos){
            if(err){
                res.send(err);
            }
            res.json(todos);
        });
});

//POST that create todo and return all todos
router.post('/api/todo', function(req, res, next){
    new Todo({
        content : req.body.content,
        update_at : new Date()
    }).save(function(err, todo, count){
        if(err){
            res.send(err);
        }
        Todo
            .find()
            .sort('-update_at') //更加日期排序
            .exec(function(err, todos){
                if(err){
                    res.send(err);
                }
                res.json(todos);
            });
    })
});

//删除后返回所有
router.delete('/api/todo/:id', function(req, res, next){
    Todo.findById(req.params.id, function(err, todo){
        todo.remove(function(err, todo){
            if(err){
                res.send(err);
            }
            Todo
                .find()
                .sort('-update_at') //更加日期排序
                .exec(function(err, todos){
                    if(err){
                        res.send(err);
                    }
                    res.json(todos);
                });
        })
    })
});
//Update
router.put('/api/todo/:id', function(req, res, next){
    //更新操作
    Todo.findById(req.params.id, function(err, todo){
            if(err){
                res.send(err);
            }
        todo.content = req.body.content;
        todo.save(function(err){
            console.log('update success');
        });
    });
            Todo
                .find()
                .sort('-update_at') //更加日期排序
                .exec(function(err, todos){
                    if(err){
                        res.send(err);
                    }
                    res.json(todos);
                });
});


module.exports = router;
