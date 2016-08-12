import './MyTours.html';
import './MyTours.css';

import '../../components/NavBar/NavBar.js';
import '../../components/TourDisplayBox/TourDisplayBox.js';

import { $ } from 'meteor/jquery';
import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Roles } from 'meteor/alanning:roles';
import { ReactiveDict } from 'meteor/reactive-dict';

import { Tours } from "../../../api/tours/tours.js";

Template.Home.onCreated(function homeOnCreated() {
  this.autorun((v) => {
    this.subscribe('tours.created');
  })
})

Template.Home.helpers({
	tours(){
		return Tours.find();
	}
});
