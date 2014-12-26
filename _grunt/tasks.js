module.exports = function(grunt) {
	
	// build css
	grunt.registerTask('css', ['sass', 'autoprefixer']);
	
	// add sass, autoprefix, concat, etc. to this tasks
	grunt.registerTask('build', ['css', 'shell:jekyllPublish']);
	
	grunt.registerTask('build-dev', ['css', 'csslint', 'shell:jekyllPublish']);
	
	grunt.registerTask('dev', ['build-dev', 'connect', 'watch']);
};