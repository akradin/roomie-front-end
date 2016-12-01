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
  success(data);
};


module.exports = {
  failure,
  success,
  signInSuccess,
};
