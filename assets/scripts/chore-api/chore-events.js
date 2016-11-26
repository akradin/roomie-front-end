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
  console.log(data);
};


const addHandlers = () => {
$('.chore-submit').on('submit', onCreateChore);
};

module.exports = {
  addHandlers
};
