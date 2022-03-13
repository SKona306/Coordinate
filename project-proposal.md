# Coordinate

## Name of Student: Shaun Kent
## Project's Purpose:
 
Have you ever been on vacation/trip and wasted precious relaxation time due to miscommunication/misinformation? This app works to maximize your time by creating a centralized place where you can find all the necessary information about your trip and share it with others! Users can create groups and share items(Itinerary, to-do, flight info, etc.) to others in the group making sure everyone is up to date on the details, thus maximizing your relaxation time.  
 
## Minimum Viable Project
 
* Users can create profiles and log in (authentication and authorization handled using firebase)  
 
* Users can create groups and add people
 
* Users can share an itinerary, send to-do items, and other important information to group members. ( firebases real time database)
 
## Languages and Technologies
 
* HTML
 
* CSS
 
* JavaScript
 
* React
 
* React-Router-DOM
 
* FireBase (authentication, firestore realtime database)
 
* ReactFire
 
* Material UI

* Spring.js
 
## Component Diagram
 
![ComponentDiagram](capstone-component-diagram.drawio (1).png)
 
## Stretch Goals
* Allow trip creator ability to see which group members have completed todo tasks.
 
* give posts the ability to to be upvoted and down voted.
 
* Create internal chat between users in same groups
 
* Add weather forecasting for specific area using Open Weather API
 
* Connect Flight Tracker API for real time flight status
 
* Include Google Maps API (Iframe) for search functionality of the area.

* Users can make posts to the group (activity and hotel suggestions, post about upcoming weather, etc.).

* Itinerary will update when time-based events pass. (Firebase Timestamp)

## Additional Resources
 
* Open Weather API
 
* Flight Tracker API
 
* Google Maps API
 
* Firebase (timestamp, Cloud Messaging)

# Research and Planning

## Saturday, 01/23  

* 2:00 - 2:30 Prioritize project into MVP and stretch goals

* 2:30 - 3:30 Research and determine which stack would be best for this project. Decided on using MERN over MEAN or C#/.NET for practice with React.

* 3:30 - 4:00 Researched realtime databases and how to implement them in a project. Finished basic outline of proposal with rough estimate of technologies needed

## Saturday, 1/29

* 2:00 - 4:00 Researched Firebase database, read quick start documentation for realtime databases, authentication and timeStamp and decided to use firebase instead of mongoDB for database.


## Saturday 2/12

* 2:00-3:20 Watched video on firebase React full CRUD structure using React-Router-Dom, also read https://www.freecodecamp.org/news/how-to-build-a-todo-application-using-reactjs-and-firebase/ to see compare different ways to structure application. Broke down react firebase template here:https://github.com/GiovaniBiagi/cra-template-firebase using similar project structure.

* 3:20-4:00 Planned out and created component diagram for project

## Sunday 2/27

* 9:30-1:00 Watched multiple videos on how to use MUI for styling. Specifically looking at how to use container, paper, card and other styled components and how to add custom css properties. Read through MUI docs to see how to customize css of pre made components. link: https://www.youtube.com/watch?v=Xoz31I1FuiY , https://www.youtube.com/watch?v=o1chMISeTC0


## Monday 2/28

* 4:00-4:45: Watched video on how to setup firebase authentication using a custom auth context to store current user and using react router with private routes. link: https://www.youtube.com/watch?v=PKwu15ldZ7k

* 4:45-5:15: Watched youtube video explaining how the new syntax for version 6 speicifically focusing on how useHistory has changed to useNavigate and Switch is changed to Routes. https://www.youtube.com/watch?v=UjHT_NKR_gU

## Wednesday 3/2

* 7-7:30: Read log rocket article which shows how to create a user profile in the database as soon as the user registers with the app. link: https://blog.logrocket.com/user-authentication-firebase-react-apps/

* 7:30-8:30: read firebase documentation to make sure that nosql will work for project. Decided to use firestore with by referencing other collections. Will need to find a solution for child parent delete functionality found in sql. Designed Database schema using Lucid. 

## Sunday 3/6 

* 9:30-12:00: watch youtube videos about cleanup function for useEffect hook. also looked at some documentation to determine how to fix the memory leak in the application that is a result of the useEffect and onAuthStateChanged method. links: https://www.loginradius.com/blog/async/how-to-fix-memory-leaks-in-react/, https://www.youtube.com/watch?v=0ZJgIjIuY7U, https://www.youtube.com/watch?v=gv9ugDJ1ynU, https://www.youtube.com/watch?v=UVhIMwHDS7k

## Tuesday 3/8

* 11:00-12:00: Ran into an issue firestore database when user profile is created during signup the only id that is given is uid but the document id is randomly generated. This causes issues when using updateDoc firestore method as it requires the doc id instead of the uid created during signup. Watched youtube video playlist that covers v9 firestore syntax and the difference in using addDoc and setDoc. link: https://www.youtube.com/watch?v=ig91zc-ERSE&list=PLqFvlDFoiZ-2SAX7YXCYtb28K4IooCIlS 

* 12:00-12:40: Read over firestore documentation that covers how to add data to firestore. Specifically looked at the difference between addDoc which generates a random id and setDoc which allows the developer to assign the specific id needed. This allowed me to set the document id as the user uid making querying later on in app easier. link: https://firebase.google.com/docs/firestore/manage-data/add-data#update-data

* 7:40-8:00: watch youtube video explaining how attatch onclick functionality to mui icons. Link: https://www.youtube.com/watch?v=AVonkBWYeDU

* 8:00-8:30: read documentation about buttonIcon which allows the developer to use an icon as a button. link: https://mui.com/api/icon-button/. Read github thread about how to add onClick event handler to icon button link: https://github.com/mui/material-ui/issues/1340