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
      url: config.host + '/chores/' + data.chore.chore_id,
      method: 'PATCH',
      data,
    });

const showChores = function(){
  $.ajax({
    url: config.host + '/chores',
    method: 'GET'
  });
};

  module.exports ={
    createChore,
    updateChore,
    showChores
  };
