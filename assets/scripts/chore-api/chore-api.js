'use strict';

const config = require('../config.js');

const createChore = (data) =>
  $.ajax({
    url: config.host + '/chores',
    method: 'POST',
    data,
  });

  module.exports ={
    createChore,
  };
