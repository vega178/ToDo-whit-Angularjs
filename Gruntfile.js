module.exports = function (grunt){
    //configuración del inicio del proyecto
    grunt.initConfig({
        //Configuración basica e información del plugin
        pkg: grunt.file.readJSON('package.json'),

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
            sass: {
                files: 'css/**.sass',
                tasks: 'sass'
            }
        }
    });
     grunt.loadNpmTasks('grunt-contrib-sass');
     grunt.loadNpmTasks('grunt-contrib-watch');

     grunt.registerTask('default', ['watch']);
};