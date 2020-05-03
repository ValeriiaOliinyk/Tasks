/* eslint-disable import/extensions */

'use strict';

import users from './users.js';

console.log('Task 1');

const getUserNames = arr => arr.map(user => user.name);
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]
