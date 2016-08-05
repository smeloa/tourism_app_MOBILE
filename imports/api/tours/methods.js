import { _ } from 'meteor/underscore';
import { Roles } from 'meteor/alanning:roles';
import { Meteor } from 'meteor/meteor';
import { DDPRateLimiter } from 'meteor/ddp-rate-limiter';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Tours } from './tours.js'

Meteor.methods({
  'tours.create'(data){
    const user = Meteor.user();

    if(Roles.userIsInRole(user, 'guide')) {
      data.createdBy = this.userId;
      data.createdAt = new Date();
      Tours.insert(data);
    } else {
      throw new Meteor.Error('not-allowed', "You don't have permission to execute this action");
    }
  }
});

if(Meteor.isServer) {
  const METHOD_NAMES = [
    'tours.create'
  ];
};
