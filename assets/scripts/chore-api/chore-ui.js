'use strict';


const createSuccess = (data) => {
    console.log(data);
    $('.chore-id').append("ID: " + " " + data.chore.id + "<br>");
    $('.chore-name').append("NAME: " + " " + data.chore.name + "<br>");
    $('.chore-due').append("DUE DATE: " + " " + data.chore.due_date + "<br>" );
    $('.chore-difficulty').append("DIFFICULTY: " + " " + data.chore.difficulty + "<br>");

};

const updateSuccess = (data) =>{
  // $('.chore-name').append("NAME: " + " " + data.name + "<br>");
  // $('.chore-due').append("DUE DATE: " + " " + data.due_date + "<br>" );
  // $('.chore-difficulty').append("DIFFICULTY: " + " " + data.difficulty + "<br>");
  console.log(data);
};

const showSuccess = function(data){
  console.log(data.chores);
};

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.log(error);
};

module.exports = {
  success,
  failure,
  updateSuccess,
  createSuccess,
  showSuccess
};
