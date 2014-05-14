module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
    htmlmin: {
      dist: {
          options: {
              removeComments: true,
              collapseWhitespace: true,
              removeEmptyAttributes: true,
              removeCommentsFromCDATA: true,
              removeRedundantAttributes: true,
              collapseBooleanAttributes: true
          },
          files: {
              // Destination : Source
              './index.html': './src/index.html'
          }
      }
    }
  });

  // Load the plugin that provides the "htmlmin" task.
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // Default task(s).
  grunt.registerTask('default', ['htmlmin']);

};