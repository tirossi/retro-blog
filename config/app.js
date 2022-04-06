var express = require('express');
var path = require('path');
var routes = require('./routes');

var app = express();

app.set("port", process.env.PORT || 3000);

app.use(express.static('public'));

// views
app.set('views', path.join('D:/Matrix/node/retro-blog/', 'views'));
app.set('view engine', 'ejs');


app.use(routes);

app.listen(app.get('port'), function () {
  console.log('listening on port ' + app.get('port'));
});

