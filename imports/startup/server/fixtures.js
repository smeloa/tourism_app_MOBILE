import { Meteor } from 'meteor/meteor';

import { Cities } from '/imports/api/cities/cities.js';

console.log(Cities);

Meteor.startup(function() {

  if (Cities.find().count() == 0){
      const cities = [
        {"cityName":"Cartagena", "countryCode":"CO"},
        {"cityName":"Paris", "countryCode":"FR"},
        {"cityName":"New York", "countryCode":"US"}
      ]

      cities.map((city)=>{
        Cities.insert(city);
      });

      console.log("Cities seeded");
  }

});
