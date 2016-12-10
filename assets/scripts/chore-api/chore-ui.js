'use strict';
const showNewChore = require('../handlebars-templates/show-new-chore.handlebars');
const showAllChores = require('../handlebars-templates/show-all-chores.handlebars');


const createSuccess = (data) => {
    $('.show-chores').hide();
    $('.chore-id').show();
    $('.chore-id').empty();
    $('.chore-name').show();
    $('.chore-due').show();
    let chores = { chores:[data]};
    $('.new-chores').html(showNewChore(chores));
    $('.new-chores').show();
    $('.delete-chore').hide();
    $('.chore-id').hide();
    $('.show-chores-button').show(500);
};

const updateSuccess = () =>{
  $('.update-chore').show();
  $('.update-chore').html('Chore updated! Click get chores for an updated list.');
  $('.show-chores').hide();
  $('.chore-id').hide();
  $('.show-chores-button').show(500);
};



const showSuccess = function(data){
  let chores = data;
  $('.show-chores').slideDown(500);
  $('.show-chores').html(showAllChores(chores));
  $('.update-chore').hide();
  $('.delete-chore').hide();
  $('.new-chores').hide();
  $('.chore-update').hide();
  $('.chore-id').hide();
  $('.show-chores-button').hide();

};

const deleteSuccess = () => {
  $('.delete-chore').show();
  $('.delete-chore').html('Gonzo!');
  $('.update-chore').hide();
  $('.show-chores').hide();
  $('.chore-id').hide();
  $('.show-chores-button').show(500);
};

const failure = (error) => {
  $('.chore-id').show();
  $('.chore-id').html('Something is not quite right. Make sure you have filled out all forms with the correct format');
};

module.exports = {
  deleteSuccess,
  failure,
  updateSuccess,
  createSuccess,
  showSuccess
};
