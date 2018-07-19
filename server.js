const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');
const bodyParser = require('body-parser');
const passport = require('passport');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoose = require('mongoose');

const db = require('./config/keys').mongoURI;

mongoose.connect(db,  {useNewUrlParser: true }).then(() => console.log(`MongoDB connected`)).catch(err => console.log(err));
// Passport middleware
app.use(passport.initialize());
// passport Config
require('./config/passport')(passport);
//use Routes
app.get('/', (req, res) => res.send('Hello World'));
app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/profile', profile);

app.listen(port, () => console.log(`Server running on port ${port}`));
