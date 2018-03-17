const path = require('path');

let base = path.join(__dirname, '../assets');

let paths = {
    base: base,
    js: base + '/js',
    css: base + '/css',
    sass: base + '/sass',
    images: base + '/images',
    stylesheets: base + '/stylesheets',
    javascripts: base + '/javascripts'
};

module.exports = paths;

