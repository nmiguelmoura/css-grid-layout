module.exports=function(grunt){
    grunt.initConfig({
        pkg:grunt.file.readJSON('./package.json'),
        sass:{
            dist:{
                options:{
                    style:'compressed',
                    sourcemap:'none'
                },
                files:{
                    'css/index-grid-style.css':'css/sass/index-grid-style.scss',
                    'css/index-demo-style.css':'css/sass/index-demo-style.scss'
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default',['sass']);
};