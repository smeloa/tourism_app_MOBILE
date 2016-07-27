import './CreateTour.html';
import './CreateTour.css';

import '../../components/NavBar/NavBar.js';

import { $ } from 'meteor/jquery';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Roles } from 'meteor/alanning:roles';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Cities } from '../../../api/cities/cities.js';

Template.CreateTour.onCreated(function eventCreateOnCreated() {
	this.autorun((v) => {
		this.subscribe('cities');
	});
});

Template.CreateTour.helpers({
	cities() {
		return Cities.find();
	}
});
