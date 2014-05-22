var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

app.set('port', process.env.PORT || 8888);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'client')));

app.get('*', function (req, res) {
	res.render('master');
});

http.createServer(app).listen(app.get('port'), function () {
	console.log('app listening on port ' + app.get('port'));
});
