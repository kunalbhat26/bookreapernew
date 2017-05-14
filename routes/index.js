var userRoutes = require('./user');
var homeRoutes = require('./home');
var shopRoutes  = require('./shop');

var constructorMethod = function(app){
    app.use("/", homeRoutes);
    app.use("/shop", shopRoutes);
    app.use("/user", userRoutes);
    app.use("*", function(request,response){
        response.send(404);
        console.log("BAD REQUEST!");
    });
};

module.exports = constructorMethod;