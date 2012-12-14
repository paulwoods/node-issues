var express = require('express')
	, app = express()
	, publicFolder = __dirname + '\\public'
	, bootstrapDir = __dirname + '\\public\\bootstrap'
	, viewDir = __dirname + '\\views';


// build the routes
app.use(app.router);

// any urls that start with /static will access the files in the public folder
app.use('/static', express.static(publicFolder));

// any urls that start with /bootstrap will access the twitter bootstrap
app.use('/bootstrap', express.static(bootstrapDir));

// log user access
app.use(express.logger());

// g-zip all transfers
app.use(express.compress());

// enable cookie support
app.use(express.cookieParser("issue tracker secr3t value"));

// enable session support
app.use(express.session());

// parse request bodies (req.body)
app.use(express.bodyParser());

// support _method (PUT in forms etc)
app.use(express.methodOverride());

// enable csrf protection
app.use(express.csrf());

// default handling of errors
app.use(express.errorHandler());

// set the folder where the views are stored
app.set('views', viewDir);	

// use the jade template engine
app.set('view engine', 'jade');

// all this app to run behind a proxy
app.enable('trust proxy')

// pretty-print the html output in dev mode
app.configure('development', function(){
	app.locals.pretty = true;
});


require('./boot')(app, {});



app.listen(3000);

console.log('Listening on port 3000');
