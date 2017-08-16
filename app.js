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

//output = Mustache.render( template, data );

app.get('/', function(req, res){
   res.render('index', user_profiles)
 }
  );

app.get('/:dynamic', function(req, res){
  res.render('user', user_profiles.users[req.params.dynamic-1])
  
});
//var user_id = req.params.dynamic;
//res.render('user', user_profiles.users[0])
// var user = user_profiles.users.filter(function( obj ) {
// return obj.id == user_id;
// console.log(user);
// for (var i = 0; i < user_profiles.users.length; i++) {
//   let user = user_profiles.users.id;
//   console.log(user);
// }
// var user_id = req.params.dynamic;
// var user = user_profiles.users.filter(function( obj ) {
//   return obj.id === user_id;
//   console.log(user);
// });



app.listen(3000, function(){
  console.log("the app is running on port 3000!");
});

  //
  // console.log("request params: "+req.params.dynamic)
  //
  // var user = user_profiles.users.filter(function( obj ) {
  // return obj.id == req.params.dynamic;




//   console.log(x);
//   var elementPos = user_profiles.users.map(function(x) {return x.id; }).indexOf(req.params);
//   var user = user_profiles.users[elementPos];
//
//   res.send(`That thing you requested was ${user}`)
//   let users = user_profiles.users;
//   let user = "";
//   for (var i = 0; i < users.length; i++) {
//     if (users[i].id === req.params){
//       user = users[i];
//       console.log("user: "+user);
//     }
//   }
//   let user = user_profiles.users[eval(req.params - 1)]
// });
//
//
//
// app.get('/:dynamic', function(req, res){
//   //console.log(req.params);
//   res.send(`That thing you requested was ${req.params.dynamic}`)
// });
//
// app.get('/template', function(req, res){
//   res.render('index', {name: 'Lila'});
// });
