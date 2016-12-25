'use strict';

const store = require('../store.js');
const successError = require('./success-error-handlers.js');

const clearForms = () => {
  $('input').val('');
};

const success = (data) => {
  successError.authSuccess();
};

const failure = (error) => {
  successError.authFail();
};

const signInSuccess = (data) => {
  $('.container').show();
  store.user = data.user;
  $('.log-in').hide();
  $('.change-password-button').show();
  $('.dropdown-toggle').text(data.user.email);
  $('.log-out-button').show();
  $('.sign-up-button').hide();
  $('.sign-in-button').hide();
  success(data);
  $('#welcome-modal').hide();
  $('.modal-backdrop').remove();
};

const logOutSuccess = () => {
  $('.container').hide();
  $('#log-out').modal('hide');
  $('.change-password-button').hide();
  $('.log-out-button').hide();
  $('.sign-up-button').show();
  $('.sign-in-button').show();
  $('.dropdown-toggle').text("Sign Up / Sign In");
};


module.exports = {
  failure,
  success,
  signInSuccess,
  logOutSuccess,
};
