import './CreateAccount.html';
import './CreateAccount.css';

import { $ } from 'meteor/jquery';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Bert } from 'meteor/themeteorchef:bert';

Template.CreateAccount.events({
    'click .back' (event, instance) {
        event.preventDefault();
        FlowRouter.go('/')
    },

    'click .guide' (event, instance) {
        event.preventDefault();
        $('.guide').addClass('on');
        $('#registerExplorerForm').addClass('hidden');
        $('.explorer').removeClass('on');
        $('#registerGuideForm').removeClass('hidden');
    },

    'click .explorer' (event, instance) {
        event.preventDefault();
        $('.explorer').addClass('on');
        $('#registerGuideForm').addClass('hidden');
        $('.guide').removeClass('on');
        $('#registerExplorerForm').removeClass('hidden');
    },

    'submit #registerExplorerForm' (event) {
        event.preventDefault();

        const data = {
          email: event.target.email.value,
          password: event.target.password.value,
          profile: {
            firstname: event.target.firstname.value,
            lastname: event.target.lastname.value,
            phone: event.target.phone.value,
            role: "explorer",
            source: "mobile"
          }
        };

        Accounts.createUser(data, function(error) {
          if (error) {
            if (error.reason == "Email already exists.") {
              setTimeout(function() {
                Bert.alert("The email is already registered", 'danger');
              }, 500);
            }
          } else {
            setTimeout(function() {
              Bert.alert('Welcome ' + Meteor.user().profile.firstname, 'success');
            }, 500);
            FlowRouter.go('/home')
          }
        });
    },

    'submit #registerGuideForm' (event) {
        event.preventDefault();

        const data = {
          email: event.target.email.value,
          password: event.target.password.value,
          profile: {
            firstname: event.target.firstname.value,
            lastname: event.target.lastname.value,
            phone: event.target.phone.value,
            role: "guide",
            source: "mobile"
          }
        };

        Accounts.createUser(data, function(error) {
          if (error) {
            if (error.reason == "Email already exists.") {
              setTimeout(function() {
                Bert.alert("The email is already registered", 'danger');
              }, 500);
            }
          } else {
            setTimeout(function() {
              Bert.alert("Welcome " + Meteor.user().profile.firstname, 'success');
            }, 500);
            FlowRouter.go('/home')
          }
        });
    }
});
