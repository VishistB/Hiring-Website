#CONQUEST
-An HR recruitment solution making the process easy and effortless.
-StudyMonk Assignment

#Tech Stack
-HTML
-CSS
-Javascript

#Description
This project consists of the following pages:-
1. Landing page:-
   This page contains all the information about the (hypothetical/probable)
   features that a full scale website in this niche has.
   The scroll based animations have been implemented using vanilla javascript and CSS code as instructed.

2. Login/Register Pages:-
   A slight variation of one another, out of which register page contains two additional input fields to store information.
   The login page however is far more functional. If credentials from userdata.json is entered into the login the user credentials
   are stored in the LOCAL STORAGE. This mimicks the technique of JWT authentication where, after login a token is locally stored which
   cannot be tampered with.

3. HIRE/SHORTLISTED pages:-
   The Hire page fetches all the data from the json applicants.json file inside HirePage folder and renders only those which have
   false as a value for the shortlisted attribute. This allows the server to render only those names who haven't been shortlisted
   already.
   The Shortlisted Page on the other hand renders only names of those who have been shortlisted.
   One thing to note is that when the SHORTLIST button is clicked the data is not permanently changed in the json file so on
   reloading page it will get restored. 