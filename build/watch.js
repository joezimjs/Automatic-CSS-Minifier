var requirejs = require('requirejs'),
	fs = require('fs'),
	config = require('./watch-config'),
	current;


var setFileWatch = function( watch, config ) {
	fs.watchFile(watch, function(curr, prev) {
		console.log(watch + " has been updated. Optimizing...");

		requirejs.optimize(config, function (buildResponse) {
			console.log('Optimization complete.\n');
		});
	});

	console.log( 'Watching: ' + watch );
};

console.log('');

for (var i = 0, l = config.length; i < l; i++) {
	current = config[i];
	for (var x = 0, len = current.watch.length; x < len; x++) {
		setFileWatch(current.watch[x], current.optimizeConfig);
	}
}

console.log('All watch files have been configured.\n');