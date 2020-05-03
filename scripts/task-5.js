/* eslint-disable import/extensions */

'use strict';

import users from './users.js';

console.log('Task 5');

const getUserWithEmail = (arr, email) => arr.find(user => user.email === email);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}
