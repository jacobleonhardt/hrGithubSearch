# Git the Right Guy
Human Resource Portal for GitHub Applicants 

## Stack
### Frontend
- JavaScript
- React
- Redux
- CSS

### Third-Party
- GitHub API

## About
### Deliverables
This app was constructed for the HR department of an imaginary company. The client needed the ability to find GitHub users based on their real names or email addresses. Other requirments included, but were not limited to: 
- Use of a modenr JS framework.
- Search form.
- Single page application, with search results displayed on the same page as the search form.
- Results including the following information: 
  - Username
  - Real Name
  - Avatar
  - Location
  - Email
  - Number of Public Repos
  - Account Creation Date
  - Last Update Date
  Limited results.
  Link to User's GitHub Profile.

### Issues and Resolutions

#### Backend
At the beginning of the project, I though constructing a backend would be useful. So I started programming a Python/Flask backend. However, after I started getting into React and Redux, and dealing with the API, I considered that I could handle the API calls and dealing with the returned data in the stores files of the project. From that point on, I focused on dealing with the API via the frontend only. The files for the backend code were in this repository at one time, but have since been removed.

### OAuth
The GitHub API does allow for users to make queries without being authenticated. However, this limits the user to 60 calls per hour. I looked into using GitHub's OAuth for this project, however, after investing a good deal of time into researching OAuth and making a few different attempts, it seemed best for the completion of the project to move forward with the basic/unauthenticated API calls.

In a future version of the application, adding GitHub authentication would be a prime update feature.

### Emails
While the API call does return a key-value pair for the user's email, the email key seems to always return with a value of `null`. It seemed this might have been due to the user having a privacy setting on their GitHub account that was protecting their email address from being retruned in the API call. However, after testing this out on myself by making my email public, the email value still returned as `null`. After some further research, it can be done in unauthenticaed apps, but a secondary call is required.

### Time Expenditure
Total Time: 17:10

Saturday: 0:59
- Set up repo
- Initialize React app
- Research GitHub API

Sunday: 5:36
- Routring 
- Work on error with requests module
- Address error with requests
- Make to-do list to make sure of deliverables and necessary steps
- Get started on frontend search form
- Setup Redux
- Test API call from front end
- Make results component
- Render test results in a component

Monday: 6:51
- Deploy inital React app to GitHub pages
- Styling
- Code querying function for making calls to GitHub API
- Further research OAuth for GitHub API

Tuesday: 3:44
- Style edits
- Include message for if no results are found
- Further research OAuth
- Attempted `/events/public` to retrieve emails. (Successful, but caused addition issues.)
- Write documentation (this time is not included in overall time expediture)
