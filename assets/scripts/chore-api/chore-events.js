'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./chore-api.js');
const ui = require('./chore-ui.js');

// const store = require('../store');


const onCreateChore = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  // console.log(data);
  api.createChore(data)
    .then(ui.createSuccess)
    .catch(ui.failure);
};

const onUpdateChore = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  // store.update_chore = data;
  api.updateChore(data)
    .then(ui.updateSuccess)
    .catch(ui.failure);
};

const onShowChores = function (e){
  e.preventDefault();
  api.showChores()
    .then(ui.showSuccess)
    .catch(ui.failure);
};


const addHandlers = () => {
$('.chore-submit').on('submit', onCreateChore);
$('.chore-update').on('submit', onUpdateChore);
$('.show-chores-button').on('click', onShowChores);
};

module.exports = {
  addHandlers
};
