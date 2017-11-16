var mongoose = require("mongoose");
var Campground = require ("./models/campground");
var Comment = require("./models/comment");

var data = [
    {name:"Cloud's Rest",
    image:"https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel tincidunt mi, id congue augue. Sed rutrum scelerisque leo, luctus placerat mi malesuada sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sit amet metus vitae nisi maximus bibendum sit amet eu nunc. In laoreet nisi ut nulla fermentum suscipit. Etiam ac molestie diam. Aenean vitae lacus ac purus ullamcorper placerat efficitur fermentum massa. Nullam eget metus nulla. In et consectetur libero. quis lorem dignissim ex sodales malesuada. Pellentesque enim magna, hendrerit posuere purus quis, consectetur euismod lorem. Vestibulum sed ipsum nisl. Maecenas vulputate condimentum erat a rutrum. Etiam eu tincidunt libero. Sed maximus in nisi eu viverra. Donec pretium commodo faucibus. Vivamus id ultricies dolor, a mattis elit. Nullam turpis magna, pharetra vehicula maximus sit amet, elementum sodales augue. Morbi consectetur augue et turpis tincidunt, non imperdiet magna suscipit. Donec leo magna, laoreet ac pellentesque at, pellentesque in nulla. Aenean vulputate euismod placerat. Cras sapien neque, sagittis convallis diam nec, elementum luctus lacus."
    },
    {name:"Desert Mesa",
    image:"https://farm3.staticflickr.com/2353/2069978635_2eb8b33cd4.jpg",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel tincidunt mi, id congue augue. Sed rutrum scelerisque leo, luctus placerat mi malesuada sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sit amet metus vitae nisi maximus bibendum sit amet eu nunc. In laoreet nisi ut nulla fermentum suscipit. Etiam ac molestie diam. Aenean vitae lacus ac purus ullamcorper placerat efficitur fermentum massa. Nullam eget metus nulla. In et consectetur libero.Donec quis lorem dignissim ex sodales malesuada. Pellentesque enim magna, hendrerit posuere purus quis, consectetur euismod lorem. Vestibulum sed ipsum nisl. Maecenas vulputate condimentum erat a rutrum. Etiam eu tincidunt libero. Sed maximus in nisi eu viverra. Donec pretium commodo faucibus. Vivamus id ultricies dolor, a mattis elit. Nullam turpis magna, pharetra vehicula maximus sit amet, elementum sodales augue. Morbi consectetur augue et turpis tincidunt, non imperdiet magna suscipit. Donec leo magna, laoreet ac pellentesque at, pellentesque in nulla. Aenean vulputate euismod placerat. Cras sapien neque, sagittis convallis diam nec, elementum luctus lacus."
    },
    {name:"Canion Floor",
    image:"https://farm3.staticflickr.com/2116/2164766085_0229ac3f08.jpg",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel tincidunt mi, id congue augue. Sed rutrum scelerisque leo, luctus placerat mi malesuada sed. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi sit amet metus vitae nisi maximus bibendum sit amet eu nunc. In laoreet nisi ut nulla fermentum suscipit. Etiam ac molestie diam. Aenean vitae lacus ac purus ullamcorper placerat efficitur fermentum massa. Nullam eget metus nulla. In et consectetur libero.Donec quis lorem dignissim ex sodales malesuada. Pellentesque enim magna, hendrerit posuere purus quis, consectetur euismod lorem. Vestibulum sed ipsum nisl. Maecenas vulputate condimentum erat a rutrum. Etiam eu tincidunt libero. Sed maximus in nisi eu viverra. Donec pretium commodo faucibus. Vivamus id ultricies dolor, a mattis elit. Nullam turpis magna, pharetra vehicula maximus sit amet, elementum sodales augue. Morbi consectetur augue et turpis tincidunt, non imperdiet magna suscipit. Donec leo magna, laoreet ac pellentesque at, pellentesque in nulla. Aenean vulputate euismod placerat. Cras sapien neque, sagittis convallis diam nec, elementum luctus lacus."
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
             Comment.create(
                 {
                     text:"This place was great, but I wish there was internet",
                     author:"Homer"
             }, function(err, comment){
                 if(err){
                     console.log(err);
                 } else {
                 campground.comments.push(comment);
                 campground.save();
                 console.log("created new comment");
                 }
             });
         }
     });   
    });
    }
});




//add a few comments
}

module.exports = seedDB;

