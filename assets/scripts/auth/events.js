'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');

const cui = require('../chore-api/chore-ui.js');
const capi = require('../chore-api/chore-api.js');

$('.container').hide();
$('.change-password-button').hide();
$('.log-out-button').hide();

// $(window).load(function(){
//     $('#welcome-form').modal('show');
// });

const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.signUp(data)
    .then((response)=> {
      ui.success(response);
      return api.signIn(data);
    })
    .then((response) => {
      ui.signInSuccess(response);
      return capi.showChores();
    })
    .then(cui.showSuccess)
    .catch(ui.failure);
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.signIn(data)
    .then((response)=>{
      ui.signInSuccess(response);
      return capi.showChores();
    })
    .then(cui.showSuccess)
    .catch(ui.failure);
};

const onChangePassword = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.changePassword(data)
    .then(ui.success)
    .catch(ui.failure);
};

const onSignOut = function (event){
    event.preventDefault();
    api.signOut()
      .then(ui.logOutSuccess)
      .catch(ui.failure);
};


const addHandlers = () => {
  $('.sign-up-form').on('submit', onSignUp);
  $('.sign-in-form').on('submit', onSignIn);
  $('.change-password-form').on('submit', onChangePassword);
  $('.log-out').on('submit', onSignOut);
};

module.exports = {
  addHandlers,
};
