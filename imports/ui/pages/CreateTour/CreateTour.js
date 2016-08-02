import './CreateTour.html';
import './CreateTour.css';

import '../../components/NavBar/NavBar.js';

import { $ } from 'meteor/jquery';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Roles } from 'meteor/alanning:roles';
import { ReactiveDict } from 'meteor/reactive-dict';
import { Bert } from 'meteor/themeteorchef:bert';

import { Cities } from '../../../api/cities/cities.js';

Template.CreateTour.onCreated(function eventCreateOnCreated() {
	this.autorun((v) => {
		this.subscribe('cities');
	});
});

Template.CreateTour.events({
	'submit #createTourForm'(event) {
		event.preventDefault();

		const target = event.target;

		const newtour = {
			tourname: target.tourname.value,
			city: target.city.value,
			date: target.date.value,
			starttime: target.starttime.value,
			timelength: target.timelength.value,
			tourdescription: target.tourdescription.value
		}

		Meteor.call("tours.create", newtour, (error, result) => {
			if(error){
				console.log("error", error);
			} else {
				target.reset();
				setTimeout(function() {
					Bert.alert("Your tour has been created!", 'success');
				}, 500);
				FlowRouter.go('/home');
			}
		});
	}
});

Template.CreateTour.helpers({
	cities() {
		return Cities.find();
	}
});
