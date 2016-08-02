'use strict';
const Hapi = require('hapi');
const server = new Hapi.Server();
server.connection({ port: 8000 });
server.register(require('vision'), (err) => {
    if (err) {
        throw err;
    }
    server.views({
        engines: { jade: require('jade') },
        path: __dirname + '/view',
        compileOptions: {
            pretty: true
        }
    });
});
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply.view('index');
    }
});
server.register(require('inert'), (err) => {

    if (err) {
        throw err;
    }
    server.route({
        method: 'GET',
        path: '/file/{path*}',
        handler: function (request, reply) {
          console.log(__dirname+'/view/'+request.params.path);
            reply.file(__dirname+'/view/'+request.params.path);
        }
    });
});
server.start((err) => {

    if (err) {
        throw err;
    }
    console.log('Server running at:', server.info.uri);
});
