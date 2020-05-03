/* eslint-disable import/extensions */

'use strict';

import users from './users.js';

console.log('Task 6');

const getUsersWithAge = (arr, min, max) =>
  arr.filter(user => user.age <= max && user.age >= min);

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]
