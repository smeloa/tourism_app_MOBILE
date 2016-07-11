import './Start.html';
import './Start.css';

import { $ } from 'meteor/jquery';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Roles } from 'meteor/alanning:roles'

Template.Start.events({
  'click .create-account'(event, instance) {
    event.preventDefault();
    FlowRouter.go('/createaccount')
  },

  'submit #loginForm'(event, instance) {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    Meteor.loginWithPassword(email, password, function(error) {
      if (error) {
        Bert.alert("Email or password are incorrect", 'danger');
      } else {
        FlowRouter.go('/home');
      }
    });
  }
});
