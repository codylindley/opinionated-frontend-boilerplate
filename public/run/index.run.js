requirejs(['requireConfig.js'], function(){ //load up require.js configuration
    //run globals and anything else you need for this page
    requirejs(['globals','moduleA/moduleA'], function(globals,A){

        console.log(globals);
        console.log(_);
        console.log($);
        console.log(A);

    });
});