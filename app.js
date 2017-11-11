var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

var campgroundSchema = new mongoose.Schema({
    name:String,
    image:String,
    description:String
});

var Campground = mongoose.model("Campground", campgroundSchema);


// Campground.create(
//     {
//         name:"Granite Hill", 
//         image:"https://farm5.staticflickr.com/4145/4961134441_a213331b5c.jpg",
//         description:"This is a huge granite hill, no bathrooms, no water. Beautiful granite"
        
//     }, function(err, campground){
//         if(err) {
//             console.log(err);
//         } else {
//             console.log("NEWLY CREATED CAMPGROUND: ");
//             console.log(campground);
//         }
//     });

// var campgrounds = [
//         {name:"Salmon Creek", image:"https://farm9.staticflickr.com/8311/7930038740_d86bd62a7e.jpg"},
//         {name:"Mountain Goat's Rest", image:"https://farm5.staticflickr.com/4027/4368764673_c8345bd602.jpg"},
//         {name:"Granite Hill", image:"https://farm4.staticflickr.com/3290/3753652230_8139b7c717.jpg"},
//     ];


app.get("/", function(req,res) {
    res.render("landing");
});

app.get("/campgrounds", function(req,res){
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("index", {campgrounds:allCampgrounds}); 
        }
    });
       
});

app.post("/campgrounds", function(req,res) {
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name:name,image:image,description:desc};
    Campground.create(newCampground, function(err,newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
    });
    
});

app.get("/campgrounds/new", function(req,res) {
    res.render("new.ejs");
});

app.get("/campgrounds/:id", function(req,res){
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            res.render("show", {campground: foundCampground});
        }
    });
    req.params.id
    
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp server has started!");
});