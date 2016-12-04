'use strict';

const getFormFields = require('../../../lib/get-form-fields');
const api = require('./chore-api.js');
const ui = require('./chore-ui.js');


const onCreateChore = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.createChore(data)
    .then(ui.createSuccess)
    .catch(ui.failure);
};

const onUpdateChore = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  let id = $(this).data().choreId;
  api.updateChore(id, data)
    .then(ui.updateSuccess)
    .catch(ui.failure);
};

const onShowChores = function (event) {
  event.preventDefault();
  api.showChores()
    .then(ui.showSuccess)
    .catch(ui.failure);
};

const onDeleteChore = function (event){
  let id = $(this).data().choreId;
  event.preventDefault();
  api.deleteChore(id)
  .then(ui.deleteSuccess)
  .catch(ui.failure);
};

const showUpdate = (e) => {
  let className = '.chore-update-' + $(e.target).data().choreId;
  $(className).removeClass('hidden');
  $('.dpicker').datepicker({
  format: "yyyy-mm-dd"
  });

};

const addHandlers = () => {
  $('.chore-submit').on('submit', onCreateChore);
  // $('.chore-update').on('submit', onUpdateChore);
  $('.show-chores-button').on('click', onShowChores);
  $('.show-chores').on('click', '.delete-button', onDeleteChore);
  $('.show-chores').on('click','.update-button', showUpdate);
  $('.show-chores').on('submit','.update-form', onUpdateChore);
};

module.exports = {
  addHandlers
};
