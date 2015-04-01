var _ = require('lodash');
var allModelNames = ['Post', 'User'];

var knex = require('knex')({
    client: 'mysql',
    connection: {
        host     : '127.0.0.1',
        user     : 'root',
        password : '',
        database : 'bookshelf-sandbox',
        charset  : 'utf8'
    }
});

var bookshelf = require('bookshelf')(knex);

_.each(allModelNames, function(modelName) {
    var model = require('./models/'+modelName);
    GLOBAL[modelName] = bookshelf.Model.extend(model)
});

console.log('ready');