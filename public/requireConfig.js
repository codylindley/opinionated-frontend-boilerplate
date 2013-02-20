requirejs.config({
    baseUrl: 'modules', //require.js assumes you are loading from this directory
    /*paths shortcuts, assumes starting point is baseUrl directory unless the paths
    setting starts with a "/" or has a URL protocol in it ("like http:")*/
    paths: {
		backbone: '../libraries/thirdparty/backbone/backbone', //placed in global scope
		jquery: '../libraries/thirdparty/jquery/jquery', //placed in global scope
		lodash: '../libraries/thirdparty/lodash/dist/lodash.underscore', //placed in global scope
        handlebars: '../libraries/thirdparty/handlebars.js/dist/handlebars', //placed in global scope
        mockjax: '../libraries/thirdparty/jquery-mockjax/jquery.mockjax', //placed in jQuery namespace
        modernizer: '/libraries/thirdparty/modernizr-latest/index',
		globals: '../globals',
        string: '../libraries/thirdparty/string.js/lib/string', //normal AMD
        requireDomready: '../libraries/thirdparty/requirejs-domready/domReady', //require plugin
        requireText: '../libraries/thirdparty/requirejs-text/text', //require plugin
        requireCSS: '../libraries/thirdparty/require-css/css', //require plugin
    },
    /*shim gives the ability to setup dependencies for non-AMD libraries.*/
    shim: {
        'globals': {
            deps: ['modernizer','lodash','jquery', 'handlebars','backbone','mockjax']
        },
        'backbone': {
			deps: ['lodash','jquery']
        },
        'mockjax': {
            deps: ['jquery']
        }
    },
    //
    map: {
        '*': {
            'requireCSS': '../../libraries/thirdparty/require-css/css' // or whatever the path to require-css is
        }
    }
});