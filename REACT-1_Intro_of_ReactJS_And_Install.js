//========1.Introdunction of ReactJs & Installation(13-11-2024)========




// #React - 
/*
=>Library based on JS

=>NodeJS - 2009

=>Separation of back end & front end
-->Common back-end three types of mainly
I.Android App
II.iOS App
-->front end are separated
I.Websites - We consider this time Mobile App


=>BACK-END
==========CONNECTED LINK OF REST API'S==========
=>FRONT-END
---->Examples;
-->Routing - Changing of Pages
-->API Calling
-->Internal Data Transfer
-->Templating
-->Temporary Data Storage - e.g Modal
-->Login/Authentication


=>localStorage/sessionStorage - Storing a temporary data not depending

=>not possible / not efficient - Vanilla JavaScript it's also Plan JavsScript



=>Difference between Library VS Framework
-->Library - React - Collection of functions/Services for a specific task - Supporting to Libraries
-->Framework - Angular - Complete Architecture(All inbuilt functionalities) - mvc, mv* etc



=>MERN VS MEAN
-->M - MONGODB
-->E - EXPRESS
-->N - NODEJS
-->MERN - R - REACT - No need to run on browser - Only to show on browser for user
-->MEAN - A - ANGULAR - No need to run on browser - Only to show on browser for user



=>Two Approches to wrok on 'REACT'
I.Create blank npm repo and add all react libraries - Core Approach
II.React blank boilerplate - it's create a Basic setup/readymade folder - Most Preffer ✔
-->Start a fresh project - Most Preffer ✔
-->Already running project to add 'REACT'



=>git Commands
-->npx is modified version of 'npm'
-->npx = npm + git clone + npm install



=>Git Uploading Blank Repo
-->git first time upload 
-->git regular upload


=>Git downloading Repo
-->I.git first time download
-->II.git regular downloads - latest updates on local 


I.git clone(git first time download)
-->Blank repo is download you system
-->npm install
-->npm start - run project


II.git clone(git regular downloads )
-->git pull origin main



**!Important - If you have to run the 'REACT' install the compulsory 'NODE'
*/






/*
#Installation of React -
=>Steps of How to Create a New React App;

-->You need to already install node with npm & then install react using following steps;
-->We using above second approch of react to Create a New React App/Installation
-->Go to this web https://legacy.reactjs.org/ click on 'Docs' section
-->The go to the 'Installation' section click on 'Create a New React App'
-->You’ll need to check version Node >= 14.0.0 and npm >= 5.6 on your machine using
   'node -v' & 'npm -v' to get the version into the terminal
-->If you not exact location to create react folder to use 'cd ..' & then
-->Into the terminal to paste 'npx create-react-app frontend_react' you will get the new folder
-->Using the 'ls' you get the list of your folder
-->If you want to change the folder directory use 'cd frontend-react'
-->Using 'npm start' to execute the "Hello Program" & starting the development server "http://localhost:3000"


**Steps for How to first time upload blank repository on gthub(Git first time upload);

-->Go to the your https://github.com/ profile - purpose of sharing the code on github
-->Click on 'new repository' & give the name of 'Repository name' is "frontend_react" & create repo
-->We can show the command line of blank repository to upload a github
-->Split the new terminal ina an existing 

-->Before the the create a blank repo you can must be followed the below steps;
=>1.Go to this web site 'Git official website ' & install 64-bit Git for Windows Setup.
=>2.Restart the vs code 'source control' it's visible 
=>3.open cmd check your current version using 'git --version'
=>4.Copy your 'git location ' from your computer
=>5.Go to the 'Advanced system settings'
=>6.Under the Advanced tab, click on Environment Variables
=>7.Find the Path variable under System Variables and click Edit
=>8.Add you path like this C:\Program Files\Git\bin
=>9.Restart the vs code
=>10.To set the account default identity using 
   git config --global user.email "you@example.com"
   git config --global user.name "Your Name"
=>11.Then to check setup is execute using 'git config --global --list'

-->To the upload the files on github from blank repository use 'git init' it's Reinitialized
-->And the more file use 'git add .' 
-->and then enter 'git commit -m "first commit"' file insertion is completed in github
-->check the branch using 'git branch' you get default "main"
-->To add the origin to known the repository on github is there or not that the use 
  'git remote add origin https://github.com/cmkalal24/frontend_react.git'
-->The to push the repository to use 'git push origin main'
--You will complete the authentication 
-->refresh a github page & check your blank repository 
-->You can now host your website 'https://github.com/cmkalal24/frontend_react'




**Steps for How to regular upload blank repository on gthub(Git regular upload);
-->You can save your file & go to the 'Source Control'
-->Into the terminal enter a 'git status' you will get status 'modified'
-->Add a file using 'git add .\REACT-1_Intro_of_ReactJS_And_Install.js'
-->The commit the the code using 'git commit -m "React-1_Intro_React_And_Install"'
-->After the check the branch using 'git branch' it's a 'main'
-->Then push your docment using 'git push origin main'

*/