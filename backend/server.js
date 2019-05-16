var express=require('express');
path = require('path');
var bodyParser=require('body-parser');
var cors=require('cors');
var mongoose=require('mongoose');
config = require('../config/DB');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/forms',
{useNewUrlParser: true}).then(
  () => {console.log('Database is connected')},
  err => {console.log('Database is not  connected'+err)}
  );


 const app=express();
 app.use(bodyParser.json());
 app.use(cors());
//app.use('/', router);
//AdUnit=require('../models/Profile.js');

let AdUnitSchema = new mongoose.Schema({
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  email: {
    type: String
  }

});
let AdUnit = mongoose.model('AdUnit', AdUnitSchema);
app.get('/users/list',function(req,res,next){
  //console.log('fetch data');
  //mongoose.connect('mongodb://localhost:27017/forms',{useNewUrlParser: true }, function (err, db) {

    // var cursor = db.collection('adunits').find({
      //firstname: 'mahesh',

  AdUnit.find({}, function(err, result) {
    res.json(result);
    //console.log(result);
  })
});


app.post('/users/add', function(req,res) {
  //console.log(req.body);
  //res.json(req.body);
  //res.send('request is sent');
  var form =new AdUnit(req.body);

  form.save(function(err){
    res.status(201);
  })


});
//  app.use('/profiles',profileRoutes);
app.delete('/users/delete/:id',function (req,res) {
  AdUnit.deleteOne({ _id: req.params.id},function (err,result) {
    console.log(result);
res.json(result);
  })
  //console.log(req.params.id);

})

const server = app.listen(4000, ()=>console.log('express started running on server 4000'));
