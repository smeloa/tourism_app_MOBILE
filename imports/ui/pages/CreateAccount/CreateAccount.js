import './CreateAccount.html';
import './CreateAccount.css';

import { $ } from 'meteor/jquery';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.CreateAccount.events({
  'click .back'(event, instance) {
    event.preventDefault();
    FlowRouter.go('/')
  },

  'click .guide'(event, instance) {
    event.preventDefault();
    $('.guide').addClass('on');
    $('#registerExplorerForm').addClass('hidden');
    $('.explorer').removeClass('on');
    $('#registerGuideForm').removeClass('hidden');
    setTimeout(function() {
		    Bert.alert('parcero');
		}, 750);
  },

  'click .explorer'(event, instance) {
    event.preventDefault();
    $('.explorer').addClass('on');
    $('#registerGuideForm').addClass('hidden');
    $('.guide').removeClass('on');
    $('#registerExplorerForm').removeClass('hidden');
  },
});
