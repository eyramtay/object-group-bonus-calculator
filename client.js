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


const newEmployees = [];

function updateEmployees (name, bonusPercentage, totalCompensation, totalBonus ) {
  let employee = {
    name,
    bonusPercentage,
    totalCompensation,
    totalBonus,
  }
  newEmployees.push(employee);
  return newEmployees;
}
updateEmployees('Atticus', 0, 0, 0);
updateEmployees('Jem', 0, 0, 0);
updateEmployees('Scout', 0, 0, 0);
updateEmployees('Robert', 0, 0, 0);
updateEmployees('Mayella', 0, 0, 0);
console.log(newEmployees);



function updateBonus (array, array2) {
  for (let i = 0, j = 0; i < array.length, j < array2.length; i++, j++) {
    if (array2[j].reviewRating <= 2) {
      array[i].bonusPercentage = 0;
    }
    else if(array2[j].reviewRating === 3){
      array[i].bonusPercentage = 4;
    }
    else if(array2[j].reviewRating === 4){
      array[i].bonusPercentage = 6;
    }
    else if(array2[j].reviewRating === 5){
      array[i].bonusPercentage = 10;
    }
  }

  return array;
}
console.log(updateBonus(newEmployees, employees));
console.log(newEmployees);




function calculateBonus (array3) {
  if (array3.reviewRating <= 2) {
    console.log('No bonus');
  } else if (array2.reviewRating === 3) {
    console.log('Should receive');
  }
  }




function blank (array4) {
  for (let i = 0; i < array4.length; i++) {
    console.log(array4[i]);
  } return 
}
