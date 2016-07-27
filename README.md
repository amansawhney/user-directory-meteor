# user-directory-meteor

This is another app I am developing to learn how to use Meteor.

## Demo
https://user-directory-meteor.herokuapp.com/

## Objective

Create an application that displays a list of users with the ability to load more users

## Challenges

--------------------------------------------------------------------------------

Completed:

- Need a place to store data => Using Mongodb
- Need a way to generate this data => Used 'Faker' to create 5000 fake records
- Must assume that we have thousands of entries and we only want to send a small subset to the client at any time. => Set a limit on the amount of records that is received by the client
- Need a way to load more data when the user clicks the 'Load More' button => used a click event handler to make a new subscibtion

--------------------------------------------------------------------------------

Need To Do

--------------------------------------------------------------------------------
