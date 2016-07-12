Meteor.methods({
  'addUserGuideRole'(userId){
    Roles.addUsersToRoles(userId, 'guide');
  },
  'addUserExplorerRole'(userId){
    Roles.addUsersToRoles(userId, 'explorer');
  }
})
