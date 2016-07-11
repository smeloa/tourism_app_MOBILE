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
import '../../ui/pages/Home/Home.js';

//Frontend routes

FlowRouter.route('/', {
    name: 'start',
    title: 'Start',
    action(params) {
      if(Meteor.loggingIn() || Meteor.userId()){
        FlowRouter.go("/home");
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
        FlowRouter.go("/home");
      } else {
        BlazeLayout.render("MainLayout", { content: "CreateAccount" });
      }
    }
});

FlowRouter.route('/home', {
    name: 'home',
    title: 'Home',
    action(params) {
      if(Meteor.loggingIn() || Meteor.userId()){
        BlazeLayout.render("MainLayout", { content: "Home" });
      } else {
        FlowRouter.go("/");
      }
    }
});