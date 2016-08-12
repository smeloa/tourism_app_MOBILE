import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';

import { Tours } from '../tours.js';

Meteor.publish('tours.public', function() {
  return Tours.find({});
});

Meteor.publish('tours.created', function() {
  if (Roles.userIsInRole(this.userId, 'guide')) {
    return Tours.find({createdBy: this.userId});
  }
});

// Meteor.publish('tours.assiting', function() {
//
// });

// Meteor.publish('tours.assited', function() {
// });
