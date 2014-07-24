// This file was automatically generated from example.soy. // Please don't edit this file by hand. if (typeof example == 'undefined') { var example = {}; } /** * @param {Object.
<string, *>=} opt_data * @param {(null|undefined)=} opt_ignored * @return {string} * @notypecheck */ example.page = function(opt_data, opt_ignored) { return main.page({baseDir: opt_data.baseDir, content: '
    <link rel="stylesheet" href="' + soy.$$escapeHtml(opt_data.baseDir) + 'styles/example.css">' + menu.side(opt_data) + '
    <div id="main">
        <div class="iframe-container">
            <iframe src="' + soy.$$escapeHtml(opt_data.baseDir) + '../bower_components/tracking.js/examples/' + soy.$$escapeHtml(opt_data.name) + '.html"></iframe>
        </div>
    </div>'}); };
