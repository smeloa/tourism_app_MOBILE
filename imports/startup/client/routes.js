import {Meteor} from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-password';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

//Imports to load initial templates
import '../../ui/layouts/MainLayout.js';
import '../../ui/pages/Start.js';

//Frontend routes

FlowRouter.route('/', {
  name: 'start',
  title: 'Start',
  action(params) {
    BlazeLayout.render("MainLayout", {content: "Start"});
  }
});
