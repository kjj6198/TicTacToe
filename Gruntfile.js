const gruntConfig = {
	jshint: {
		files: ["Gruntfile.js", "lib/*.js", "test/**/*.js"],
		options: {
		  globals: {
		  	$: true,
		  	jQuery: true,
		  	console: true,
		  	module: true,
		  	document: true,
		  	require: true,
		  	BusBox: true,
		  	window: true,
		  	bus_intro: true
		  },
		  eqeqeq: true,
      eqnull: true,
      browser: true,
		  esnext: true,
		  undef: true,
		  maxdepth: 3,
		  maxcomplexity: 5,
		  reporter: require('jshint-stylish-ex')
		},
	},
	eslint: {
	 
	 target: ['js/**/*.js'],
	 
	},
	watch: {
		files: ['js/**/*.js'],
		tasks: ['jshint'],
		options: {
			debounceDelay: 250,
		}
  }
};



module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-eslint');

  grunt.initConfig(gruntConfig);
  // set your task
  grunt.registerTask('hint', ['eslint', 'jshint']);
  grunt.registerTask('uglify', ['uglify']);

  
  
};