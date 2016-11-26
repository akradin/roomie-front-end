'use strict';

const store = require('../store.js');
const successError = require('./success-error-handlers.js');

const success = (data) => {
  console.log(data);
  successError.authSuccess();
};

const failure = (error) => {
  console.log(error);
  successError.authFail();
};

const signInSuccess = (data) => {
  store.user = data.user;
  success(data);
};


module.exports = {
  failure,
  success,
  signInSuccess,
};
