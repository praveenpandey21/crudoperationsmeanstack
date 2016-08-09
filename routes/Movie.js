var Movie = require('../model/commanschema');
var express = require('express');
var router = express.Router();


router.route('/Movie').get(function(req, res) {
  Movie.find(function(err, user) {
    if (err) {
      return res.send(err);
    }
      res.json(user);
  });
});
// this is api /movie1 is for inserting a movie
router.route('/Movie1').post(function(req, res) {
    var movie = new Movie();
    movie.name=req.body.name;
    movie.age=req.body.passd;
    movie.address=req.body.address;
    movie.save(function(err,user) {
      if (err) {
        return res.send(err);
      }
      else {
        console.log(user);
        res.json(user);
      }

    //  res.send({ message: 'Movie Added' });
    });
  });


// this is api/Delete1 for deleting the values


router.route('/Delete1').post(function(req, res) {

console.log(req.body.age);
  Movie.remove(
    {age:req.body.age},
function(err,book){
  if (err) {
    console.log('error to remove');
  } else {
    //console.log(book);
    //res.end();
    res.json(book);
  }
});
});


/* search Api */
router.route('/Search1').post(function(req, res) {


  Movie.find({
  age: req.body.srch
  }, function(err, user) {
    if (err) {
      return res.send(err);
    }
    res.json(user);
//res.json({ message: 'Successfully deleted' });
  });
});



// update code api

router.route('/Update1').post(function(req,res){

Movie.findOneAndUpdate({
  name:req.body.name
},
{$set:{

name:req.body.name,
age:req.body.passd,
address:req.body.address
}},
{upsert:true},
function (err,user) {
  if (err) {
    console.log('error occured');
  } else {
    console.log(user);
    res.send(user);
  }
});

});





module.exports = router;
