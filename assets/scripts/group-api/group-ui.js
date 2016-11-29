'use strict';

const store = require('../store.js');

const success = (data) => {
  console.log(data);

};

const failure = (error) => {
  console.log(error);
};

module.exports = {
  success,
  failure,
};
