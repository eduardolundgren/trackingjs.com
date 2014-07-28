// This file was automatically generated from example.soy. // Please don't edit this file by hand. if (typeof example == 'undefined') { var example = {}; } /** * @param {Object.
<string, *>=} opt_data * @param {(null|undefined)=} opt_ignored * @return {string} * @notypecheck */ example.page = function(opt_data, opt_ignored) { return main.page({pageName: opt_data.pageName, baseDir: opt_data.baseDir, content: '
    <link rel="stylesheet" href="' + soy.$$escapeHtml(opt_data.baseDir) + 'styles/example.css">' + menu.side(opt_data) + '
    <div id="main">
        <div class="iframe-container">
            <iframe src="' + soy.$$escapeHtml(opt_data.url) + '"></iframe><a href="' + soy.$$escapeHtml(opt_data.sourceUrl) + '" class="view-source" target="_blank">View source</a>
        </div>
    </div>'}); };
