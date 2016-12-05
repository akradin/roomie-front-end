'use strict';

const store = require('../store.js');
const successError = require('./success-error-handlers.js');

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
  $('.log-out-button').show();
  success(data);
};

const logOutSuccess = () => {
  $('.container').hide();
  $('#log-out').modal('hide');
  $('.change-password-button').hide();
  $('.log-out-button').hide();
};


module.exports = {
  failure,
  success,
  signInSuccess,
  logOutSuccess,
};
