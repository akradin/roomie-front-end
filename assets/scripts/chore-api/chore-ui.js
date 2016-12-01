'use strict';



const createSuccess = (data) => {
    $('.show-chores').hide();
    $('.chore-id').append("ID: " + " " + data.chore.id + "<br>");
    $('.chore-name').append("NAME: " + " " + data.chore.name + "<br>");
    $('.chore-due').append("DUE DATE: " + " " + data.chore.due_date + "<br>" );
    $('.chore-difficulty').append("DIFFICULTY: " + " " + data.chore.difficulty + "<br>");

};

const updateSuccess = (data) =>{
  $('.update-chore').html('Chore updated! Click get chores for an updated list.');
};



const showSuccess = function(data){
  let chores = "";
  for (let i = 0; i < data.chores.length; i++) {
     chores += "NAME: " + " " + data.chores[i].name + "<br>" + "ID: " + " "  + data.chores[i].id + "<br>" + "DUE DATE: " + " " + data.chores[i].due_date + "<br>" + "DIFFICULTY: " + " " + data.chores[i].difficulty + "<br>";
  }
  $('.show-chores').show();
  $('.show-chores').html(chores);
  $('.chore-id').hide();
  $('.chore-name').hide();
  $('.chore-due').hide();
  $('.chore-difficulty').hide();
};

const success = (data) => {

};

const failure = (error) => {

};

module.exports = {
  success,
  failure,
  updateSuccess,
  createSuccess,
  showSuccess
};
