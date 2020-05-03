/* eslint-disable import/extensions */

'use strict';

import users from './users.js';

console.log('Task 7');

const calculateTotalBalance = arr =>
  arr.reduce((total, user) => total + user.balance, 0);

console.log(calculateTotalBalance(users)); // 20916
