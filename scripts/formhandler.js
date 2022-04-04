(function (window) {
    'use strict';

    let App = window.App || {};
    let $ = window.jQuery;

    function FormHandler(selector) {
        //do stuff
        if (!selector) {
            throw new Error('No selector Provided!');
        }


        this.$formElement = $(selector);
        if (this.$formElement.length == 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    FormHandler.prototype.addSubmitHandler = function () {
        console.log('Setting the submit hander for the form...');
        this.$formElement.on('submit', function(event) {
            event.preventDefault();

            let data = $(this).serializeArray();
            console.log(data);
        });
    }

    App.FormHandler = FormHandler;
    window.App = App;
})(window);