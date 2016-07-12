import { Roles } from 'meteor/alanning:roles';
import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

Meteor.methods({
  'addUserGuideRole'(userId){
    Roles.addUsersToRoles(userId, 'guide');
  },
  'addUserExplorerRole'(userId){
    Roles.addUsersToRoles(userId, 'explorer');
  }
})
