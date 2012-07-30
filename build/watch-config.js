module.exports = [
	{
		watch: ['../css/style.css', '../css/reset.css'],
		optimizeConfig: {
			cssIn: '../css/style.css',
			out: '../css/style.min.css',
			optimizeCss: "standard"
		}
	}
];