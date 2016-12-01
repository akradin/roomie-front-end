'use strict';



const createSuccess = (data) => {
    $('.chore-id').html("ID: " + " " + data.id + "<br>");
    $('.chore-name').html("NAME: " + " " + data.name + "<br>");
    $('.chore-due').html("DUE DATE: " + " " + data.due_date + "<br>" );
    $('.chore-difficulty').html("DIFFICULTY: " + " " + data.difficulty + "<br>");

};

const updateSuccess = (data) =>{
  $('.update-chore').html('Chore updated! Click get chores for an updated list.');
};



const showSuccess = function(data){
  let chores = "";
  for (let i = 0; i < data.length; i++) {
     chores += "NAME: " + " " + data[i].name + "<br>" + "ID: " + " "  + data[i].id + "<br>" + "DUE DATE: " + " " + data[i].due_date + "<br>" + "DIFFICULTY: " + " " + data[i].difficulty + "<br>";
  }
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
