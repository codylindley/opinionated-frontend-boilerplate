requirejs(['requireConfig.js'], function () {
    
    requirejs(['globals','moduleA/moduleA',], function(globals,A){

    console.log(globals);
    console.log(_);
    console.log($);
    console.log(Backbone);
    console.log(Handlebars);
    console.log(A);

    });

});