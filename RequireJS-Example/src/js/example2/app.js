requirejs.config({
    baseUrl: 'js',
    paths: {
        // the left side is the module ID,
        // the right side is the path to
        // the jQuery file, relative to baseUrl.
        // Also, the path should NOT include
        // the '.js' file extension. This example
        // is using jQuery 3.1.1 located at
        // js/jquery-3.1.1.min.js, relative to
        // the HTML page.
        'jquery': 'jquery-3.1.1.min',
        'app' :'example2'
    }
});

// Load the main app module to start the app

requirejs(["app/main"]); // YUKARIDA TANIMLANAN app PATH'İNİ BURADA KULLANIYORUZ. PATHİ TANIMLAMASAYDIK example2/main YAZMAMIZ LAZIMDI