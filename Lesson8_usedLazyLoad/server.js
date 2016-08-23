'use strict';
const Hapi = require('hapi');
// Create a server with a host and port
const server = new Hapi.Server();
server.connection({ 
  host: 'localhost', 
  port: 8000 
});
//inert plugin for static pages
server.register([require('vision'),require('inert')], (err) => {
  if (err) {
    throw err;
  }
  server.views({
    engines: {jade : require('jade') },
   relativeTo:__dirname+'/views/'
   });
  const homeHandler=function(request,reply){
    reply.view('index');
  };
  const serveViews = function(request, reply, view) {
    reply.view(view);
  }
  server.route({
    method:'GET',
    path:'/',
    handler: homeHandler
  });
  server.route({
    method:'GET',
    path:'/helpers/controllers/{param*}',
    handler:{
      directory:{
        path:'./helpers/controllers/',
        listing:false,
        index:false}}});
  server.route({
    method:'GET',
    path:'/helpers/styles/{param*}',
    handler:{
      directory:{
        path:'./helpers/styles/',
        listing:false,
        index:false}}});
  server.route({
    method:'GET',
    path:'/helpers/services/{param*}',
    handler:{
      directory:{
        path:'./helpers/services/',
        listing:false,
        index:false}}});
 server.route({
    method:'GET',
    path:'/helpers/{param*}',
    handler:{
      directory:{
        path:'./helpers/',
        listing:false,
        index:false}}});

  server.route({
    method:'GET',
    path:'/views/{view*}',
    handler: function(request, reply){
      var view = request.params.view;
      serveViews(request, reply, view);
    }
  });
  server.route({
    method:'GET',
    path:'/bower_components/angular-bootstrap/{param*}',
    handler:{
      directory:{
        path:'./bower_components/angular-bootstrap',
        listing:false,
        index:false
      }
    }
  });
  server.route({
    method:'GET',
    path:'/bower_components/bootstrap/dist/css/{param*}',
    handler:{
      directory:{
        path:'./bower_components/bootstrap/dist/css',
        listing:false,
        index:false
      }
    }
  });
  server.route({
    method:'GET',
    path:'/bower_components/bootstrap/dist/js/{param*}',
    handler:{
      directory:{
        path:'./bower_components/bootstrap/dist/js',
        listing:false,
        index:false
      }
    }
  });
  server.route({
    method:'GET',
    path:'/bower_components/angular/{param*}',
    handler:{
      directory:{
        path:'./bower_components/angular',
        listing:false,
        index:false
      }
    }
  });
  server.route({
    method:'GET',
    path:'/bower_components/jquery/dist/{param*}',
    handler:{
      directory:{
        path:'./bower_components/jquery/dist',
        listing:false,
        index:false
      }
    }
  });
  server.route({
    method:'GET',
    path:'/bower_components/angular-ui-router/release/{param*}',
    handler:{
      directory:{
        path:'./bower_components/angular-ui-router/release',
        listing:false,
        index:false
      }
    }
  });
 server.route({
    method:'GET',
    path:'/bower_components/oclazyload/dist/{param*}',
      handler:{
      directory:{
        path:'./bower_components/oclazyload/dist/',
        listing:false,
        index:false
      }
    }
  });
  server.start((err) => {
    if (err) {
      throw err;
    }
    console.log('Server running at:', server.info.uri);
  });

});
