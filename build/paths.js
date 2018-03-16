const path = require('path');

let base = path.join(__dirname, '../assets');

let paths = {
    assets: base,
    js: base + '/js',
    css: base + '/css',
    sass: base + '/sass',
    stylesheets: base + '/stylesheets',
    javascripts: base + '/javascripts'
};

module.exports = paths;

