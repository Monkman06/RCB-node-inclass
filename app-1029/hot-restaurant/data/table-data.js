// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================


var tableArray = [
  {
    customerName: 'Monk',
    customerEmail: 'ptkcpt2012@gmail.com',
    customerID: 'Monkman06',
    phoneNumber: '973-727-7358'

  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = tableArray;