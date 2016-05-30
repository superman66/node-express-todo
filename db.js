/**
 * Created by superman on 2016/5/22.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Todo = new Schema({
    user_id : String,
    content : String,
    update_at : Date
});

var User = new Schema({
    id: String,
    username: String,
    password: String,
    create_date: {type: Date, default: Date.now},
    update_date: Date
});
mongoose.model('Todo', Todo);
mongoose.model('User', User);
mongoose.connect('mongodb://localhost/express-todo');
