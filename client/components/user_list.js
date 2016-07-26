import React from 'react';
import {createContainer} from 'meteor/react-meteor-data'
import {Users} from '../../imports/collections/users'

const UserList = (props) => {
  console.log(props.users)
  return (
    <div>
      <div className="user-list">
        User List
      </div>
    </div>
  );
};

export default createContainer(() => {
  //set up subsciption
  Meteor.subscribe('users');

  // return an object.  This is set to UserList as props
  return { users: Users.find({}).fetch() }
}, UserList);
