'use strict';

const config = require('../config.js');
const store = require('../store.js');

const createChore = (data) =>
  $.ajax({
    url: config.host + '/chores',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data,
  });


const updateChore = (data) =>
  $.ajax({
      url: config.host + '/chores/' + data.chore.chore_id,
      method: 'PATCH',
      headers: {
        Authorization: 'Token token=' + store.user.token,
      },
      data,
    });

const deleteChore = (id) =>
  $.ajax({
      url: config.host + '/chores/' + id,
      method: 'DELETE',
      headers: {
        Authorization: 'Token token=' + store.user.token,
      },
    });

const showChores = () =>
  $.ajax({
    url: config.host + '/chores',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
  });


  module.exports ={
    createChore,
    updateChore,
    showChores,
    deleteChore
  };
