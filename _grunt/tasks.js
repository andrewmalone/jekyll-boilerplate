module.exports = function(grunt) {
	//grunt.registerTask('default', ['sass', 'autoprefixer', 'jshint', 'shell:jekyllBuild', 'connect', 'watch']);
	//grunt.registerTask('publish', ['sass', 'autoprefixer', 'shell:jekyllPublish']);
	
	// add sass, autoprefix, concat, etc. to this tasks
	grunt.registerTask('build', ['sass', 'autoprefixer', 'shell:jekyllPublish']);
	
	// add linting to this task
	grunt.registerTask('build-dev', ['build']);
	
	grunt.registerTask('dev', ['build-dev', 'connect', 'watch']);
};