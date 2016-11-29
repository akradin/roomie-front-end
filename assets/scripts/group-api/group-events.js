'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./group-api.js');
const ui = require('./group-ui.js');


const onCreateGroup = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.createGroup(data)
    .then(ui.success)
    .catch(ui.failure);
};


const addHandlers = () => {
$('.group-submit').on('submit', onCreateGroup);
};

module.exports = {
  addHandlers
};
