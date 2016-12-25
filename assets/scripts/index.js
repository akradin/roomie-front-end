'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled

const authEvents = require('./auth/events.js');
const choreEvents = require('./chore-api/chore-events.js');
const groupEvents = require('./group-api/group-events.js');

// On document ready
$(() => {
  authEvents.addHandlers();
  choreEvents.addHandlers();
  groupEvents.addHandlers();
  $('#welcome-modal').modal('show');

});
