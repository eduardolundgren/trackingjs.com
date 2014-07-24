// This file was automatically generated from main.soy. // Please don't edit this file by hand. if (typeof main == 'undefined') { var main = {}; } /** * @param {Object.
<string, *>=} opt_data * @param {(null|undefined)=} opt_ignored * @return {string} * @notypecheck */ main.page = function(opt_data, opt_ignored) { return '
    <!doctype html>
    <html lang="en">

    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="author" content="Eduardo Lundgren">
        <meta name="description" content="A modern approach for Computer Vision on the web.">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>tracking.js</title>
        <link href="http://fonts.googleapis.com/css?family=Roboto+Slab:400,300,100|Ubuntu" rel="stylesheet" type="text/css">
        <!-- build:css ' + soy.$$escapeHtml(opt_data.baseDir) + 'styles/all.min.css -->
        <link rel="stylesheet" href="' + soy.$$escapeHtml(opt_data.baseDir) + '../bower_components/pure/pure-min.css">
        <link rel="stylesheet" href="' + soy.$$escapeHtml(opt_data.baseDir) + 'styles/highlight.css">
        <link rel="stylesheet" href="' + soy.$$escapeHtml(opt_data.baseDir) + 'styles/side-menu.css">
        <link rel="stylesheet" href="' + soy.$$escapeHtml(opt_data.baseDir) + 'styles/main.css">
        <!-- endbuild -->
    </head>

    <body>
        <div id="layout">' + soy.$$filterNoAutoescape(opt_data.content) + '</div>
        <!-- build:js ' + soy.$$escapeHtml(opt_data.baseDir) + 'scripts/all.min.js -->
        <script src="' + soy.$$escapeHtml(opt_data.baseDir) + 'scripts/side-menu.js">
            < \/script><!-- endbuild --></body > < /html>';
};
