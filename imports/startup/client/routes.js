import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-password';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { FlowRouterHelpers } from 'meteor/arillo:flow-router-helpers';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Bert } from 'meteor/themeteorchef:bert';
import { Roles } from 'meteor/alanning:roles'

//Imports to load initial templates
import '../../ui/layouts/MainLayout.js';
import '../../ui/pages/Start.js';
import '../../ui/pages/CreateAccount/CreateAccount.js';
import '../../ui/pages/Home/Home.js';
import '../../ui/pages/MyTours/MyTours.js';
import '../../ui/pages/Profile/Profile.js';
import '../../ui/pages/CreateTour/CreateTour.js';

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


FlowRouter.route('/mytours', {
    name: 'mytours',
    title: 'My Tours',
    action(params) {
      if(Meteor.loggingIn() || Meteor.userId()){
        BlazeLayout.render("MainLayout", { content: "MyTours" });
      } else {
        FlowRouter.go("/");
      }
    }
});

FlowRouter.route('/profile', {
    name: 'profile',
    title: 'Profile',
    action(params) {
      if(Meteor.loggingIn() || Meteor.userId()){
        BlazeLayout.render("MainLayout", { content: "Profile" });
      } else {
        FlowRouter.go("/");
      }
    }
});

FlowRouter.route('/createtour', {
    name: 'createtour',
    title: 'Create Tour',
    action(params) {
      if(Meteor.loggingIn() || Meteor.userId()){
        BlazeLayout.render("MainLayout", { content: "CreateTour" });
      } else {
        FlowRouter.go("/");
      }
    }
});