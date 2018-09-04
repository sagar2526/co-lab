var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const spaceController = require('./controllers/space')
const userController = require('./controllers/user')
const reviewController = require('./controllers/review')
const blogController = require('./controllers/blog')


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost:27017/co-lab')
mongoose.connection.on('error', (error) => console.error(error))
mongoose.connection.on('open', () => console.log("success in connecting to mongodb"))

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(4040, () => console.log('Express server at 4040'))

app.get('/api/v1/spaces', spaceController.getAllSpaces)
app.post('/api/v1/spaces', spaceController.postNewSpaces)
app.put('/api/v1/spaces/:id', spaceController.updateSpacesById)
app.delete('/api/v1/spaces/:id', spaceController.delSpacesById)

app.get('/api/v1/users', userController.getAllUsers)
app.post('/api/v1/users', userController.postNewUsers)
app.put('/api/v1/users/:id', userController.updateUsersById)
app.delete('/api/v1/users/:id', userController.delUsersById)

app.get('/api/v1/reviews', reviewController.getAllReviews)
app.post('/api/v1/reviews', reviewController.postNewReviews)
app.put('/api/v1/reviews/:id', reviewController.updateReviewsById)
app.delete('/api/v1/reviews/:id', reviewController.delReviewsById)

app.get('/api/v1/blogs', blogController.getAllBlogs)
app.post('/api/v1/blogs', blogController.postNewBlogs)
app.put('/api/v1/blogs/:id', blogController.updateBlogsById)
app.delete('/api/v1/blogs/:id', blogController.delBlogsById)

module.exports = app;
