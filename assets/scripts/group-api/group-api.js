'use strict';

const config = require('../config.js');

const createGroup = (data) =>
  $.ajax({
    url: config.host + '/groups',
    method: 'POST',
    data,
  });

  module.exports ={
    createGroup,
  };
