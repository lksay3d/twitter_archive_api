# twitter_archive_api
### Software Needed:
+ Node.js
+ Express
+ Postman
+ Terminal
+ Visual Studio Code

### Set-Up Instructions:
1. Ensure that the most recent version of Node.js is downloaded and installed on your computer
2. Open Terminal and run these commands:

a. install node.js :installs node.js onto your computer

b. mkdir twitter_archive_api :creates a directory for the program

c. cd twitter_archive_api :navigates into the working directory

d. npm init -y :initializes a new Node.js project

e. npm install express :installs a web server framework for Node.js

3. Download the files into the working directory
4. Install Postman onto your computer. You do not need an account to continue, you can select to move into the "lightweight" API client.

### Running the Program
1. Go into the IDE and run the server.js file
2. Open Postman and begin making your requests
    
> a. To get all tweets available in the archive: set the method to 'GET', enter the URL: 'http://localhost:3000/tweets', and click 'Send'. The 'Response' body will be populated with the information.

###### (Click the '+' icon at the top to create a new request.)
    
> b. To get a list of all external links: set the method to 'GET', enter the URL: 'http://localhost:3000/tweets/links', and click 'Send'. The 'Response' body will be populated with the information.

###### (Click the '+' icon at the top to create a new request.)

> c. To get the details about a given tweet: set the method to 'GET', enter the URL: 'http://localhost:3000/tweets/[insert tweet id here]', and click 'Send'. The 'Response' body will be populated with the information.

###### (Click the '+' icon at the top to create a new request.)

> d. To get the detailed profile of a Twitter user: set the method to 'GET', enter the URL: 'http://localhost:3000/users/[insert screenname here]', and click 'Send'. The 'Response' body will be populated with the information.
