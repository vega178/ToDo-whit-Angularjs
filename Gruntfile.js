module.exports = function (grunt) {
    //configuración del inicio del proyecto
    grunt.initConfig({
        //Configuración basica e información del plugin
        pkg: grunt.file.readJSON('package.json'),

        // crear un servidor
        connect: {
            server: {
                options: {
                    hostname: 'localhost',
                    port: 9010,// necesarion para dejar el servidor en espera 
                    keepalive: true,
                },
            }
        },

        sass: {
            options: {
                style: 'compressed',
                precision: 5
            },
            all: {
                files: {
                    'css/style.css': 'css/style.sass'
                }
            }
        },
        watch: {
            //options:{livereload:true},
            sass: {
                files: 'css/**.sass',
                tasks: 'sass'
            },
            css: {
                files: ['css/**/*.css'],
                tasks: ['watch'],
                /*options: {
                    spawn: false,
                    livereload: true
                }*/
            }
        }
    });
    //Cargar el plugin
     grunt.loadNpmTasks('grunt-contrib-sass');
     grunt.loadNpmTasks('grunt-contrib-watch');
     grunt.loadNpmTasks('grunt-contrib-connect');
     ////Hacer o ejecutar la tarea
     grunt.registerTask('default', ['watch']);
     grunt.registerTask('default', ['connect']);
};