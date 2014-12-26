module.exports = function(grunt) {
	// build css
	grunt.registerTask('css', ['sass', 'autoprefixer']);
	grunt.registerTask('js', ['concat', 'uglify'])
	
	// add sass, autoprefix, concat, etc. to this tasks
	grunt.registerTask('build', ['css', 'js', 'shell:jekyllPublish']);
	
	grunt.registerTask('build-dev', ['css', 'csslint', 'js', 'jshint', 'shell:jekyllPublish', 'validate']);
	
	grunt.registerTask('dev', ['build-dev', 'connect', 'watch']);
};