import { _ } from 'meteor/underscore';
import { Meteor } from 'meteor/meteor';
import { Tours } from '../tours.js';

Meteor.publish('tours.public', function() {
  return Events.find({});
});
