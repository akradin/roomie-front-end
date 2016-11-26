'use strict';
const config = require('../config.js');


const makeChore = (data) =>
    $.ajax({
      url: config.host + '/chore/',
      method: 'POST',
      data,
      headers: {
      },
    });

module.exports = {
  makeChore
};
