define(['globals','requireText!moduleA/moduleA.html','requireCSS!moduleA/moduleA'], function(globals,html) {

	console.log(globals);
    console.log(_);
    console.log($);
    console.log(Backbone);
    console.log(Handlebars);
    console.log(html);

	return {
		'componentA': 'componentA'
	};

});