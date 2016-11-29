'use strict';

// let showData = function(data){
//   for(let i in data){
//     return i + ':' + data[i];
//   }
// };

// $.each(data, function(key, value) {
//     $('.chore').text(key, value);
// });

const success = (data) => {
    console.log(data);
    $('.chore-id').append(data.chore.id + " ");
    $('.chore-name').append(data.chore.name + " ");
    $('.chore-due').append(data.chore.due_date + " ");
    $('.chore-difficulty').append(data.chore.difficulty + " ");


};

const failure = (error) => {
  console.log(error);
};

module.exports = {
  success,
  failure,
};
