This repo contains the UI code for the given assignment

Step 1: npm install
Step 2: npm start

Notes:
- Run this once you've cloned the json-server and it is up and running.

-List of users with name and user id is rendered on the home url.
-Clicking on the user opens the modal which contains a calendar and by default, present date is selected.
-The activity of the user for that date is shown below, if any.
-Any date on the calendar can be selected and the activity periods get rendered.


Util functions:
 
1. createActvityPeriodObj
   Takes : A single activity period object for a particular user
   Returns : An object containing date, month, year, start time and end time
   
2. getFormattedDate
   Takes : A date object
   Returns : A date string (to be printed on the screen)

3. checkIsActive
   Takes: 
        - date : A date object
        - activityPeriods : An array of objects containing all the activity of the user
        
   Returns: An array of objects which provides the active sessions for selected user on that day. (returns an empty array if no active session is found )

