import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-password';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Bert } from 'meteor/themeteorchef:bert';

//Imports to load initial templates
import '../../ui/layouts/MainLayout.js';
import '../../ui/pages/Start.js';
import '../../ui/pages/CreateAccount/CreateAccount.js';
import '../../ui/pages/UserMain/UserMain.js';

//Frontend routes

FlowRouter.route('/', {
    name: 'start',
    title: 'Start',
    action(params) {
      if(Meteor.loggingIn() || Meteor.userId()){
        FlowRouter.go("/usermain");
      } else {
        BlazeLayout.render("MainLayout", { content: "Start" });
      }
    }
});

FlowRouter.route('/createaccount', {
    name: 'createaccount',
    title: 'Create Account',
    action(params) {
      if(Meteor.loggingIn() || Meteor.userId()){
        FlowRouter.go("/usermain");
      } else {
        BlazeLayout.render("MainLayout", { content: "CreateAccount" });
      }
    }
});

FlowRouter.route('/usermain', {
    name: 'usermain',
    title: 'User Main',
    action(params) {
      if(Meteor.loggingIn() || Meteor.userId()){
        BlazeLayout.render("MainLayout", { content: "UserMain" });
      } else {
        FlowRouter.go("/");
      }
    }
});
