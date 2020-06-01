var compressor = require('yuicompressor');

compressor.compress('assets/css/combined.css', {
    charset: 'utf8',
    type: 'js',
    nomunge: true,
    'line-break': 80
}, function(err, data, extra) {

});