/* eslint-disable import/extensions */

'use strict';

import users from './users.js';

console.log('Task 4');

const getInactiveUsers = arr => arr.filter(user => !user.isActive);

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]
