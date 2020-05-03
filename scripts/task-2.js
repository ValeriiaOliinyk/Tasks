/* eslint-disable import/extensions */

'use strict';

import users from './users.js';

console.log('Task 2');

const getUsersWithEyeColor = (arr, color) =>
  arr.filter(user => user.eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]
