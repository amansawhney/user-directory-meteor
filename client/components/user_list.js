import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Users} from '../../imports/collections/users';
import UserDetail from './user_detail';

const PER_PAGE = 20;

class UserList extends Component {
  handleButtonClick() {
     Meteor.subscribe('users', 40)
  }
  render() {
    return (
      <div>
        <div className="user-list">
          {this.props.users.map(user => <UserDetail user={user} key={user._id} />)}
        </div>
        <button onClick = {handleButtonClick} className = "btn btn-lg btn-primary">
          Load More..
        </button>

      </div>
    );
}
};

export default createContainer(() => {
  //set up subsciption
  Meteor.subscribe('users', PER_PAGE);

  // return an object.  This is set to UserList as props
  return { users: Users.find({}).fetch() }
}, UserList);
