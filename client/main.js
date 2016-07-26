import React from 'react';
import ReactDOM from 'react-dom'
import UserList from './components/user_list.js'

const App = () => {
  return (
    <div>
      <UserList />
    </div>
  );

};

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.container'));
});
