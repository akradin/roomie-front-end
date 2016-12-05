
# Roomie Front End

An application that enables you to track your chores. The application uses
the Roomie API. The application enables the user to track their chores. They
can mark the chores as complete as well as updating them


## User Stories

1. A user will be able to add a chore
2. A user will be able see all of their chores
3. A user will be able to update their chores
4. A user will be able to mark a chore as complete

## Process

I started off by building the back end for this application. I did this so I would know how I would interact with my data when it came to building the front end. I made all of the routes for chores and then built the chore controller. Each time I made a method I would test it in rails console as well as with curl requests. I also have back end functionality to be able to add a group which will ultimately be implemented so Roomie can have functionality for a shared living space. Once the back end was built I made a rudimentary front end that would enable CRUD functionality. When it came to deleting and updating chores the user had to manually input the ID of the data. Eventually I implemented handlebars to show all of the data and then used data attributes in HTML to be able to get ID numbers automatically. Then I stylized the app with better buttons.

The main issues I had were connecting my back end to my front end. I tackled this by basically having ajax calls in my front end that required the user to manually input the IDs of whatever chore they were updating. As the course of the project went on and I realized I would meet requirements, I partnered with classmates to incorporate handlebars and data attributes to take care of this making for a better user experience.

I did not reach my bonus goal of having a user have the ability to set up a group and then see the other chores in the group but since that backend feature is setup in the API it can be implemented with some more configuration and adjustments to the front end.


## Links

Website https://akradin.github.io/roomie-front-end/  <br>
Wireframe and ERD - http://framebox.org/ZCbT <br>
Back-end Repo https://github.com/akradin/roomie-back-end <br>
Heroku https://safe-brushlands-64300.herokuapp.com/ <br>
