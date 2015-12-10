var
    Xray = require('x-ray'),
    proxy = require('./proxy-driver'),
    fs = require('fs'),
    glob = require("glob"),
    request = require('request'),
    gm = require('gm').subClass({imageMagick: true}),
    _ = require('lodash');

var x = Xray();

x.delay(300, 500);
x.throttle(1, 200);
//x.driver(proxy());

x('http://www.unq.edu.ar/noticias/', 'aside#listado',{
    noticias:x('li', [
        {
            date:'div.fecha',
            title:'h3 a',
            description:'div.bajada a',
            thumbnail:'figure a img@src'
        }
    ])
}).write('../out/posts.json');
