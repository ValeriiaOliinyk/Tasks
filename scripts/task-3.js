/* eslint-disable import/extensions */

'use strict';

import users from './users.js';

console.log('Task 3');

const getUsersWithGender = (arr, gender) =>
  arr.filter(user => user.gender === gender).map(user => user.name);

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]
