module.exports = function(grunt){
    grunt.initConfig({
        sass:{
            dist:{
                files:[{
                    expand:true,
                    cwd:'css',
                    src:['*.scss'],
                    dest :'css',
                    ext: '.css'
                }]
            }
        },
        watch:{
            files:['css/*.scss'],
            tasks:['css']
        },
        browserSync : {
           dev:{
               bsFiles:{
                   src:[
                       'css/*.css',
                       '*.html',
                       'js/*.js'
                   ]
               },
               options:{
                   watchTask :true,
                   server:{
                       baseDir:'/.'
                   }
               }
           }
        }
    });
    grunt.loadNpmTask('grunt-contrib-watch');

    grunt.loadNpmTask('grunt-contrib-sass');
    grunt.loadNpmTask('grunt-browser-sync');
    grunt.registerTask('css',['sass']);
    grunt.registerTask('default',['browserSync','watch']);
}