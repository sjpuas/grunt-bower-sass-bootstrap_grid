	module.exports = function(grunt) {
		grunt.initConfig({
			pkg: grunt.file.readJSON('package.json'),			
			compass: {
				dev: {
					options: {
						sassDir: 'sass',
						cssDir: 'styles'
					}
				},
				prod: {
					options: {
						sassDir: 'sass',
						cssDir: 'styles',
						noLineComments: true,
						outputStyle: 'compressed'
					}
				}
			},
			watch: {
				css: {
					files: '**/*.scss',
					tasks: ['compass:prod']
				}
			},
			uglify: {
			    options: {
			      compress: true,
			      sourceMap: false			  
			    },
			    compress: {
			      files: {
			        'js/main.min.js': ['bower_components/jquery/dist/jquery.js','js/app.js']
			      }
			    }
		    }
		});
			
		grunt.loadNpmTasks('grunt-contrib-compass');
		grunt.loadNpmTasks('grunt-contrib-watch');
		grunt.loadNpmTasks('grunt-contrib-uglify');

		grunt.registerTask('default',['compass:prod','uglify']);		
	}
