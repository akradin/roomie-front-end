'use strict';

const formFields = require('../../../lib/get-form-fields.js');
const ui = require('./chore-ui.js');
const api = require('./chore-api.js');

const onMakeChore = function(e){
  e.preventDefault();
  let data = formFields(this);
  api.makeChore(data)
    .then(ui.success)
    .catch(ui.failure);
};


$('#make-chore').on('click', onMakeChore);
