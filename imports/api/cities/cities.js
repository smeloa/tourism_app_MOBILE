import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Mongo } from 'meteor/mongo';

export const Cities = new Mongo.Collection('cities');

const CitySchema = new SimpleSchema({
  cityName: {
    type: String,
    label: "City name"
  },
  countryCode: {
    type: String,
    label: "Country code"
  },
  createdAt: {
    type: Date,
    autoValue() {
      if(this.isInsert){
        return new Date();
      } else {
        this.unset();
      }
    }
  }
});

Cities.attachSchema(CitySchema);

Cities.publicFields = {
	name: true,
};

Cities.deny({
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
