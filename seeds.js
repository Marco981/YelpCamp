var mongoose = require("mongoose");
var Campground = require ("./models/campground");
var Comment = require(".models/comment");

var data = [
    {name:"Cloud's Rest",
    image:"https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg",
    description:"blah blah blah"
    },
    {name:"Desert Mesa",
    image:"https://farm3.staticflickr.com/2353/2069978635_2eb8b33cd4.jpg",
    description:"blah blah blah"
    },
    {name:"Canion Floor",
    image:"https://farm3.staticflickr.com/2116/2164766085_0229ac3f08.jpg",
    description:"blah blah blah"
    }
    ];


function seedDB() {
    //Remove all campgrounds
    Campground.remove({}, function(err) {
    if(err){
    console.log(err);
    } else {
        console.log("removed campgrounds!");
        //add a few campgrounds
    data.forEach(function(seed){
     Campground.create(seed, function(err, campground){
         if(err){
             console.log(err);
         } else {
             console.log("added a campground");
             //create a comment
             Comment.create({text:"This place was great, but I wish there was internet",
                            author:"Homer"
             }), function(err, comment){
                 if(err){
                     console.log(err);
                 } else {
                 campground.comments.push(comment);
                 campground.save();
                 console.log("created new comment");
                 }
             };
         }
     });   
    });
    }
});




//add a few comments
}

module.exports = seedDB;

