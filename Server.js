var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname;
var viewsPath = __dirname + "/views/"

router.use(function (req, res, next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(viewsPath + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(viewsPath + "about.html");
});

router.get("/recommend",function(req,res){
  res.sendFile(viewsPath + "recommend.html");
});

router.get("/strengths",function(req,res){
  res.sendFile(viewsPath + "strengths.html");
});

router.get("/thoughts",function(req,res){
  res.sendFile(viewsPath + "thoughts.html");
});

router.get("/less.js",function(req,res){
  res.sendFile(path + "/node_modules/less/dist/less.js");
});

router.get("/require.js",function(req,res){
  res.sendFile(path + "/node_modules/requirejs/requirejs.js");
});

router.get("/circletype.min.js",function(req,res){
  res.sendFile(path + "/node_modules/circletype/dist/circletype.min.js");
});

// TODO: Consolidate routes

app.use("/",router);

app.use('/images', express.static(path + '/public/images'));

app.use('/scripts', express.static(path + '/scripts'));

app.use('/partials', express.static(path + '/views/partials'));

app.use('/styles', express.static(path + '/public/stylesheets'));

app.use("*",function(req,res){
  res.sendFile(viewsPath + "404.html");
});

app.listen(8080,function(){
  console.log("Live at Port 8080");
  console.log(__dirname);
});
