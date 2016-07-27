import { _ } from 'meteor/underscore';
import { Roles } from 'meteor/alanning:roles';
import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

import { Cities } from './cities.js'

Meteor.methods({
	'cities.create'(data){
		const user = Meteor.users.findOne({_id: this.userId});
		Cities.insert(data);
	},
	'cities.update'(objectId, data){
		const user = Meteor.users.findOne({_id: this.userId});
		Cities.update({_id: objectId}, {$set: data});
	},
	'cities.delete'(objectId){
		const user = Meteor.users.findOne({_id: this.userId});
		Cities.remove({_id: objectId});
	},
});

if(Meteor.isServer){
	const METHOD_NAMES = [
		'cities.create',
		'cities.update',
		'cities.remove'
	];
}
