/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    requirejs: {
      compile: {
        options: {
          appDir: 'public/',
          baseUrl: 'public/modules',
          mainConfigFile: 'public/requireConfig.js',
          out: 'build/index.min.js'
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // Default task.
  grunt.registerTask('default', ['requirejs']);

};
