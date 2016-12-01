'use strict';



const createSuccess = (data) => {
    $('.show-chores').hide();
    $('.chore-id').show();
    $('.chore-id').empty();
    $('.chore-name').show();
    $('.chore-due').show();
    $('.chore-difficulty').show();
    $('.chore-id').append("ID: " + " " + data.chore.id + "<br>");
    $('.chore-name').append("NAME: " + " " + data.chore.name + "<br>");
    $('.chore-due').append("DUE DATE: " + " " + data.chore.due_date + "<br>" );
    $('.chore-difficulty').append("DIFFICULTY: " + " " + data.chore.difficulty + "<br>");

};

const updateSuccess = () =>{
  $('.update-chore').html('Chore updated! Click get chores for an updated list.');
};



const showSuccess = function(data){
  console.log(data.chores);
  let chores = "";
  for (let i = 0; i < data.chores.length; i++) {
     chores += "NAME: " + " " + data.chores[i].name + "<br>" + "ID: " + " "  + data.chores[i].id + "<br>" + "DUE DATE: " + " " + data.chores[i].due_date + "<br>" + "DIFFICULTY: " + " " + data.chores[i].difficulty + "<br>";
  }
  $('.update-chore').hide();
  $('.show-chores').show();
  $('.show-chores').html(chores);
  $('.chore-id').hide();
  $('.chore-name').hide();
  $('.chore-due').hide();
  $('.chore-difficulty').hide();
};

const deleteSuccess = (data) => {
  $('.chore-id').html('Gonzo!');
  $('.update-chore').hide();;
};

const failure = (error) => {
  $('.chore-id').html('Something is not quite right. Make sure you have filled out all forms with the correct format')
};

module.exports = {
  deleteSuccess,
  failure,
  updateSuccess,
  createSuccess,
  showSuccess
};
