$(document).ready(beginJQ);
function beginJQ(){
  console.log('Hello');
  $('#startApp').on('click', onClick);
}

const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );
console.log('');

function employeeUpdate(employee){
  let employeeName = {
    name: employee.name,
    employeeNumber: employee.employeeNumber,
    annualSalary: employee.annualSalary,
    reviewRating: employee.reviewRating
  }
  console.log('employeeUpdate: ', employeeName);
}

for(let i=0; i<employees.length; i++){
employeeUpdate(employees[i]);
}

console.log('');

function bonusCalc(employee){
  let bonus = {
    name: employee.name,
    bonusPercentage: 0,
    totalCompensation: 0,
    totalBonus: 0,
    employeeNumber: employee.employeeNumber
  }
  if(employee.reviewRating === 3){
    bonus.bonusPercentage += 4;
  }
  else if(employee.reviewRating === 4){
    bonus.bonusPercentage += 6;
  }
  else if(employee.reviewRating === 5){
    bonus.bonusPercentage += 10;
  }
  if(employee.employeeNumber.length === 4){
    bonus.bonusPercentage += 5;
  }
  if(employee.annualSalary > 65000){
    bonus.bonusPercentage --;
  }
  if(bonus.bonusPercentage > 13){
    bonus.bonusPercentage = 13;
  }
  if(bonus.bonusPercentage < 0){
    bonus.bonusPercentage = 0;
  }
  bonus.totalCompensation = (employee.annualSalary * (1 + bonus.bonusPercentage * 0.01));
  bonus.totalBonus = (employee.annualSalary * (bonus.bonusPercentage * 0.01));
  console.log('bonusCalc: ', bonus);
  $('#output').append(`<div id="employeeContainer">`);
  $('#output').append(`<p> Employee Name: ${bonus.name} </p>`);
  $('#output').append(`<p> Bonus Percentage: ${bonus.bonusPercentage}% </p>`);
  $('#output').append(`<p> Total Compensation: ${bonus.totalCompensation} </p>`);
  $('#output').append(`<p> Total Bonus: ${bonus.totalBonus} </p>`);
  $('#output').append(`</div>`);
}
function onClick(){
  for(let i=0; i<employees.length; i++){
    bonusCalc(employees[i]);
  }
}

for(let i=0; i<employees.length; i++){
  bonusCalc(employees[i]);
}