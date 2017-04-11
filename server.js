var	express	    =	require('express'),
    app         =	express();

app.set('port',	(process.env.PORT	||	55555));


// LOGIN PAGE
app.use('/',            express.static('./dist/', {
        'index' : 'index.html'
}));

// MAIN PAGE
app.use('/main',            express.static('./dist/', {
        'index' : 'main.html'
}));


app.listen(app.get('port'),	function()	{
    console.log('Server	started:	http://localhost:'	+	app.get('port')	+	'/');
});