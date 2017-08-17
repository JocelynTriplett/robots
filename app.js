const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const mustache = require('mustache-express');
const request = require('request');
const user_profiles = require('./profile_data.js')

app.engine('mustache', mustache());
app.use('/robots', express.static('robots'));
app.use(express.static(path.join(__dirname, 'public')));
//app.set('public', './public');
app.set('views', './views');
app.set('view engine', 'mustache');

//output = Mustache.render( template, data );

app.get('/', function(req, res){
   res.render('index', user_profiles)
 }
  );

app.get('/:dynamic', function(req, res){
  res.render('user', user_profiles.users[req.params.dynamic-1])

});

app.listen(3000, function(){
  console.log("the app is running on port 3000!");
});
