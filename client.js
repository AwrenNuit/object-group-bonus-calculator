$(function(){
  $('#startApp').on('click', onClick);
});

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

let count = 0;

function bonusCalc(employee){
  let bonus = {
    name: employee.name,
    bonusPercentage: 0,
    totalCompensation: 0,
    totalBonus: 0,
    employeeNumber: employee.employeeNumber
  }
  let rating = employee.reviewRating;
  let number = employee.employeeNumber.length;
  let salary = employee.annualSalary;
  calculateBonus(bonus, rating, number, salary);
  appendToDOM(bonus);
}

function calculateBonus(bonus, rating, number, salary){
  rating === 3 ? bonus.bonusPercentage += 4 : '';
  rating === 4 ? bonus.bonusPercentage += 6 : '';
  rating === 5 ? bonus.bonusPercentage += 10 : '';
  number === 4 ? bonus.bonusPercentage += 5 : '';
  salary > 65000 ? bonus.bonusPercentage-- : '';
  bonus.bonusPercentage > 13 ? bonus.bonusPercentage = 13 : '';
  bonus.bonusPercentage < 0 ? bonus.bonusPercentage = 0 : '';
  bonus.totalCompensation = (salary * (1 + bonus.bonusPercentage * 0.01));
  bonus.totalBonus = (salary * (bonus.bonusPercentage * 0.01));
}

function appendToDOM(bonus){
  $('#output').append(`<div id="employeeContainer">`);
  $('#output').append(`<p> Employee Name: ${bonus.name} </p>`);
  $('#output').append(`<p> Bonus Percentage: ${bonus.bonusPercentage}% </p>`);
  $('#output').append(`<p> Total Compensation: ${bonus.totalCompensation.toFixed(0)} </p>`);
  $('#output').append(`<p> Total Bonus: ${bonus.totalBonus} </p>`);
  $('#output').append(`</div>`);
}

function onClick(){
  if(count === 0){
    for(let employee of employees){
      bonusCalc(employee);
    }
    count++;
  }
}
