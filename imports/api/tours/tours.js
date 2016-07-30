import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Mongo } from 'meteor/mongo';
import { _ } from 'meteor/underscore';

import { Cities } from '../cities/cities.js'

export const Tours = new Mongo.Collection('tours');

const TourSchema = new SimpleSchema({
	tourName: {
		type: String,
		label: "Tour Name",
		max: 40
	},
	tourDescription: {
		type: String,
		label: "Tour Description",
		max: 400
	},
	city: {
		type: String,
		label: "City"
	},
	tourDate: {
		type: Date,
		label: "Tour Date"
	},
	tourLength: {
		type: Number,
		label: "Tour Length"
	},
	createdAt: {
		type: Date,
		autoValue() {
			if(this.isInsert){
				return new Date ();
			} else {
				this.unset();
			}
		}
	}
});

Tours.helpers({
	cityName() {
		return Cities.findOne(this.city);
	}
})

Tours.deny({
	insert() {
		return true;
	},
	update() {
		return true;
	},
	remove() {
		return true;
	}
});