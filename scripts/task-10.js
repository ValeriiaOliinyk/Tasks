/* eslint-disable import/extensions */

'use strict';

import users from './users.js';

console.log('Task 10');

const getSortedUniqueSkills = arr => {
  const uniqueSkills = arr
    .reduce((acc, { skills }) => [...acc, ...skills], [])
    .filter((user, index, array) => array.indexOf(user) === index)
    .sort();
  return uniqueSkills;
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
