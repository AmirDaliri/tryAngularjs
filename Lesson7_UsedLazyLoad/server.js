'use strict';
const Hapi = require('hapi');
// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: 8000
});
server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});
//inert plugin for static pages
server.register([require('vision'),require('inert')], (err) => {
  if (err) {
    throw err;
  }
  server.views({
    engines: { jade: require('jade') },
    relativeTo:__dirname+'/views/'
  });
  const serveViews = function(request, reply, view) {
    reply.view(view);
  }
  server.route({
    method:'GET',
    path:'/views/{view*}',
    handler: function(request, reply){
      var view = request.params.view;
      serveViews(request, reply, view);
    }
  });
  const helloHandler=function(request,reply){
    reply.view('index');
  };
  server.route({
    method:'Get',
    path:'/',
    handler: helloHandler
  });
  server.route({
    method:'Get',
    path:'/helpers/{param*}',
    handler:{directory:{path:'./helpers/',listing:false,index:false}}});
});
