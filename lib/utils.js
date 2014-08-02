(function() {
    'use strict';

    var path = require('path'),
        chalk = require('chalk'),

        Utils;

    Utils = {
        getRelativePath: function(filePath) {
            return path.relative(process.cwd(), filePath);
        },

        colorsEnabled: true,

        colorTrans: function (message, color) {
            if (Utils.colorsEnabled) {
                return chalk[color](message);
            } else {
                return message;
            }
        }
    };

    module.exports = Utils;
}());