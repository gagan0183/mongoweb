/**
 * Created by Gagan on 31-01-2017.
 */
var connect = require('connect');
var app = connect();

var logger = function (req, res, next) {
    console.log(req.method, req.url);
    next();
};

var helloWorld = function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world');
};

var yes = function (req, res, next) {
    res.setHeader('Content-type', 'text/plain');
    res.end('yes');
};

app.use(logger);
app.use('/hello', helloWorld);
app.use('/yes', yes);
app.listen(9000);
console.log('server is listening on port 9000');
