module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            dist: {
                files: [
                    {'dist/js/main-min.js': 'src/js/main.js'},
                    {'dist/js/icons-min.js': 'src/js/icons.js'}
                ]
            }
        },
        copy: {
            fonts: {
                files: [
                    { expand: true, cwd: 'src/font/Questetra-Icon-Font-A/fonts/', src: ['*.*'], dest: 'dist/fonts/', filter: 'isFile' },
                    { expand: true, cwd: 'src/font/Noto/', src: ['*.*'], dest: 'dist/fonts/', filter: 'isFile' },
                    { expand: true, cwd: 'src/font/Questetra-Icon-Font-A/', src: ['style.css'], dest: 'dist/', filter: 'isFile' },
                    { expand: true, cwd: 'src/font/Noto/', src: ['*.css'], dest: 'dist/', filter: 'isFile' }
                ]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    /*
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-text-replace");
    grunt.loadNpmTasks("grunt-contrib-compress");
    */

    grunt.registerTask('_Dist', ['copy', 'uglify']);
    
};