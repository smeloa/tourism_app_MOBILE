import './Start.html';
import './Start.css';

import { $ } from 'meteor/jquery';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

Template.Start.events({
  'click .create-account'(event, instance) {
    event.preventDefault();
    FlowRouter.go('/createaccount')
  }
});
