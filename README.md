
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



## Links

Website https://akradin.github.io/roomie-front-end/
Wireframe and ERD - http://framebox.org/ZCbT
Back-end Repo https://github.com/akradin/roomie-back-end
Heroku https://safe-brushlands-64300.herokuapp.com/
