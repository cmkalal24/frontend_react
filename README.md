# Getting Started with Create React App




# 1.Introdunction of ReactJs & Installation(13-11-2024)


// #React - 

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






// #Installation of React -
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
-->Add a file using 'git add .\README.md'
-->The commit the the code using 'git commit -m "React-1_Intro_React_And_Install"'
-->After the check the branch using 'git branch' it's a 'main'
-->Then push your doc on github using 'git push origin main'



===============================================================================================



# 2.React Components(14-11-2024)



// #Components - In a 'React' originated of component concept


=>Folder Structure of "FRONTEND_REACT"

I.README.md -
-->Basic kind of documentation
-->Basic design in this doc. if you want bold, italic, line etc..
-->In # Getting Started with Create React App you write anything but, don't rough
-->You can use file like "README.txt" 


=>Whenever we create a project 'npm-node package manager' track to them
=>Dependancy - To use external libraries



II.package.json -
-->The records keep & track to the all the dependancies
-->Keep track of version number
-->The list of dependancies into the package.json like "name": "frontend_react",  "version": "0.1.0" etc..
-->Into the package.json is important two files "dependencies" & "script"
1."script" - are those commands which we are going to run our project
-->Into the package.json all the commands are npm command
-->using npm command like 'npm start' to run a file if not there in package.json is show to 'error' 

2."dependencies" - Two types of Dependancies
-->'dependencies' - Actual final build on websites/if deployed the project
-->'devdependencies' - We want testing purpose and local 
-->If you want to directly install dependancies use command like 'npm install dependency' 
entries are automatically created like this "react": "^18.3.1" etc..



III.package-lock.json -
-->'package-lock.json' is details entry of each & every dependencies 
-->'package-lock.json' it's backup data to stored if you want to delete this you can &
you can retrive the file also using command "npm install"




IV. .gitignore -
-->All the modules & all the files which we don't want to include on Github like '/node_modules' etc..

=>How to track a git the files 
-->You can show into the existing project folder ".git" but by default hidden. 
   If not show the hidden file follow the below steps;
-->You are there in existing folder go to the 'window search bar'
-->Type 'File Explorer Options' open it. and go to the 'View' section
-->And below are click on "Show hidden files, folder & drives" click on "Apply" & "Ok"




IV.node_modules -
-->package.json & package-lock.json all dependencies files stored into the "node_modules" folder
-->"node_modules" folder downloaded all actual dependencies
-->If we deleted 'node_modules' folder. After we use universal command "npm install"
all the dependencies will be downloaded & automatically create into the "node_module" locker



=>git clone
=>ICANN - list of domain names - ip address - online server



IV.public -
-->public folder - index file - .html, .php, .js
-->Into the public folder main file is "index.html"
-->Any kind of links, images, logo into the 'public folder'




IV.src -
-->'src' it's a single folder to all created react files are  there 
-->Into the src folder each & every doc will be there like angular file
-->Into the src folder main files are "App.js", "index.js"




=>Build Tool - react-scripts/parcel/webpack/gulp........
-->webpack - covert/compile the individual files like .js, .css, .jpg, .png  to create a final folder
to host on your browser



=>You can create a self script to start a document into the 'package.json'
-->"mynsstart": "react-scripts start"
-->Into the terminal Terminate batch job (Y/N)? Y using CTRL+C
-->Run into terminal using command 'npm run mynsstart'



=>ReactDOM - It's a object & import from 'react-dom'

=>This below function are react component;
function App() {
  return (
    
  );
}

export default App;


=>In a single file like 'App.js' to create a multiple react components




===============================================================================================



# 3.Types of Components, JSX  & Modules(15-11-2024)



// #Types of Component - 



=>If you run to default homee.html page 
<!-- Server Configure - Default Filename - re-route - change to home.html -->



=>There are two types of Components -
-->I.Class Component - It's basically a Class
-->II.Functional Component - It's a normal function



-->I.Class Component - It's basically a Class

=>We write the Function Component into the "home.js" like below here;
class Homee extends React.Component() {

    render(){

      return(
            Html code here..
      )
    };
}

export default Homee;

=>In class component pre-define class which is going to work automatically achive a class component




-->II.Function Component - It's a normal function

=>We write the Function Component into the "App.js" like below here;
function App() {
  return (
      Html code here..
  );
}

export default App;

=>In a function component hit a function executed & after over the function







// #JSX - (JavaScript XML)


=>This is called JSX - JavaScript XML
function App(){

  return (
    div-/div - return html code here..
  )
}





// #Modules - Two Approach

I.CommonJS Module/Traditional Approach - To use in JavaScript
-->require("../../react");
-->require("../app.js");
-->require("../Homee.js");

==>Both are same thing to do 

II.ES6 Module- To module concept
-->'export' one package - import on other side
-->Where we created code to export him & As the same here 'import' the module name


=>Diff between require vs import-export

require                                 vs                              import-export 
complete the file is brought                                            single module
one by one  /Sychronous /blocked                                        parallel/Asychronous 
e.g require("../../react");                                   e.g import module1, import module2, import module3
require - anywhere of page                                              import-hoisting(In proper order)  
require - If condition                                                  import - No If-Else condition
e.g if(){ require - allowed}                                            e.g if(){ import //Not Allowed } 

    

=>Modules - variable, function, component 

=>Default keyword - to export the files
-->Default - import Homee from './Homee';
-->Non-default - import Homee, {Homee2} from './Homee';


=>You can create a multiple class like export like below;
class Homee2();
export  Homee2;
module.exports = {
  
  //All modules to exports here
}






===============================================================================================



# 4.(16-11-2024)





























# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)









