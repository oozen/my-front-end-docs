define(function (require) {

    var $ = require('jquery'),
            CM = require('example2/customModule'),
            alpha = require('example2/jquery.alpha');

    $(function () {
        $('body').alpha();

        var _cm = new CM.CustomModule('hello');
        _cm.alert();

    });
});