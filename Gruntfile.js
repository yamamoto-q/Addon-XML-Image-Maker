module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            dist: {
                files: {
                    // 出力ファイル: 元ファイル
                    'dist/js/main-min.js': 'src/js/main.js'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    /*
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-text-replace");
    grunt.loadNpmTasks("grunt-contrib-compress");
    
    grunt.registerTask('_Dist', ['concat:js', 'uglify', 'less:pre_build', 'replace:version', 'concat:css', 'clean']);
    */
};