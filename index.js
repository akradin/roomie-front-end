'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');
require('./node_modules/datepicker-js/dist/datepicker.js');
// load manifests
// scripts
require('./assets/scripts/index.js');

// styles
require('./assets/styles/index.scss');

// attach jQuery globally
require('expose?$!jquery');
require('expose?jQuery!jquery');
