'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./chore-api.js');
const ui = require('./chore-ui.js');


const onCreateChore = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.createChore(data)
    .then(ui.success)
    .catch(ui.failure);
};

const onUpdateChore = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.updateChore(data)
    .then(ui.success)
    .catch(ui.failure);
};


const addHandlers = () => {
$('.chore-submit').on('submit', onCreateChore);
$('.chore-update').on('submit', onUpdateChore)
};

module.exports = {
  addHandlers
};
