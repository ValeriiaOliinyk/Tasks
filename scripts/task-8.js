/* eslint-disable import/extensions */

'use strict';

import users from './users.js';

console.log('Task 8');

const getUsersWithFriend = (arr, friendName) => {
  return arr
    .filter(user => user.friends.includes(friendName))
    .map(user => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
