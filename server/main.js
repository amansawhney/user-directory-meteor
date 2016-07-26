// Only executed on the server
import _ from 'lodash';
import { Meteor } from 'meteor/meteor';
import { Users } from '../imports/collections/users';
import {image, helpers} from 'faker';

Meteor.startup(() => {
  //check to see if data exists in the collection
  console.log(Users.find({}).count());
  if (!Users.find({}).count()) {
    _.times(5000, () => { //works like a for loop
      const { name, email, phone } = helpers.createCard(); // random contact card containing many properties

      Users.insert({
        name, email, phone,
        avatar: image.avatar()
      });
    });
  }


  Meteor.publish('users', () => {
    return Users.find({}, { limit: 20 });
  });
});
