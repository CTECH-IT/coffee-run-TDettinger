(function (window) {
    'use strict';

    let App = window.App || {};
    let $ = window.jQuery;

    function FormHandler() {
        if (!selector) {
            throw new Error('No selector Provided!');
        }
    }

    App.FormHandler = FormHandler;
    window.App = App;
})(window);