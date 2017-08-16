const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const mustache = require('mustache-express');
const request = require('request');
const user_profiles = require('./profile_data.js')

app.engine('mustache', mustache());
app.use('/our-first-app', express.static('our-first-app'));
app.use(express.static(path.join(__dirname, 'public')));
//app.set('public', './public');
app.set('views', './views');
app.set('view engine', 'mustache');

console.log(user_profiles.users[1]);

//output = Mustache.render( template, data );

app.get('/', function(req, res){
   res.render('index', user_profiles)
 }
  );
 //});

app.listen(3000, function(){
  console.log("the app is running on port 3000!");
});

// app.get('/:dynamic', function(req, res){
//   //console.log(req.params);
//   res.send(`That thing you requested was ${req.params.dynamic}`)
// });

// app.get('/template', function(req, res){
//   res.render('index', {name: 'Lila'});
// });
