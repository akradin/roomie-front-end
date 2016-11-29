'use strict';

const config = require('../config.js');
const store = require('../store.js');

const createChore = (data) =>
  $.ajax({
    url: config.host + '/chores',
    method: 'POST',
    data,
  });

const updateChore = (data) =>
    $.ajax({
      url: config.host + '/chores/' ,
      method: 'PATCH',
      data,
    });

  module.exports ={
    createChore,
    updateChore
  };
