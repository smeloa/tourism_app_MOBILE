import './NavBar.html'

import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import { $ } from 'meteor/jquery';
import { Roles } from 'meteor/alanning:roles';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { FlowRouterHelpers } from 'meteor/arillo:flow-router-helpers';

Template.NavBar.events({
	'click .logout'(event){
		Meteor.logout();
		FlowRouter.go('/');
		setTimeout(function() {
			Bert.alert("Keep exploring!", 'success');
		}, 500);
	}
});

Template.NavBar.helpers({
	isSelectedItem(name) {
		if(FlowRouter.getRouteName() == name) {
			return 'active';
		}
		return null;
	}
})