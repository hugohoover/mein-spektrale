// 包装函数 // Do grunt-related things in here
module.exports = function(grunt) {

require('load-grunt-tasks')(grunt);
// 任务配置,所有插件的配置信息
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
//  當使用stylus的時候去注釋
//    stylus:{
//        build: {
//            options: {
//                linenos: false,
//                compress: true
//            },
//            files: [{
//                'assets/css/main.css': ['src/styl/main.styl']
//            }]
//        }
//    },
//    // watch插件的配置信息
//    watch: {
//        another: {
//            files: ['assets/css/*','src/styl/*.styl'],
//            tasks: ['stylus'],
//            options: {
//                livereload: 1337
//            }
//        }
//    }
    sass: {
        dist: {
            options: {
                linenos: false,
                loadPath: ['/src/_sass/']
            },
            files: [{
                'assets/css/main.css': ['src/_sass/main.scss']
            }]
        }
    },
    watch: {
        scripts: {
            files: ['assets/css/*','src/_sass/*.scss'],
            tasks: ['sass'],
            options: {
                livereload: 1337
            }
        },
    }
    });
    // 告诉grunt我们将使用插件
    grunt.loadNpmTasks('grunt-contrib-watch');
    // grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-sass');
    // 告诉grunt当我们在终端中输入grunt时需要做些什么
    grunt.registerTask('default', ['watch'], ['sass']);
};
