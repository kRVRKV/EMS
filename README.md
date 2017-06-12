# Energy Meter System
> A simple browser extension for UX professionals to test how energy efficient an user interface is.

## 0. Collaborators
* Vanessa Vorteil
* Sergey Balabonin
* Erik Krivorukov

## 1. Brief overview

The aim is to measure how much energy from the user analyzable user interface is taking and compare different user interfaces (mouse journey, click, typing, touching, swiping, eye movement journey).
More user spends energy for user interface the less efficient the user interface is. If more energy spending user interface is used for selling something it usually means smaller conversion rates or less user that less energy costing user interface.

Our application is divided into two parts:

First part is a Chrome browser extension that listens to user activity on any given web page, measuring potential energy expenditure.
Second part consists of a Node.js web server which will ultimately handle the API for the extension and supply the portal from where UX professionals can access gathered data and analyze it.

The current version of the portal prototype: [courtesy of Erik K & Adobe XD](https://xd.adobe.com/view/b06cc423-c3f8-476d-a5c7-078aae161a25/)

## 2. Frameworks
For the extension: [Node](https://nodejs.org), [Web Extensions](https://developer.mozilla.org/en-US/Add-ons/WebExtensions)

For the platform: [Boostrap (visuals)](http://getbootstrap.com/), [jQuery (functionality)](https://jquery.com/), [Font-Awesome (visuals)](http://fontawesome.io/), [Google Fonts (visuals)](https://developers.google.com/fonts/), [Bower (dependency management)](https://bower.io/), [Node (development)](https://nodejs.org/en/).

## 3. Target platforms
First incarnation of our project will run on Chrome web browser and Mac/Linux/Windows platform for the server.

## 4. Guide for installing
>Reference to any advances [here](https://github.com/ristokitsing).

## 5. Guide for developing
### Developing HTML prototype
In order to start creating HTML prototypes, you need to download [Node.js (latest)](https://nodejs.org/en/) and install it.
Next, you need to open a command prompt window (PowerShell, bash etc) and type in the following command:
```
npm install http-server -g
```  
This will install a simple web server on your computer, that will be used by the "Run prototype" script.
In addition, Bower is required for front-end dependencies:
```
npm install bower -g
```  
When in the root folder, run the command `bower install` to download all front-end dependencies.
To start the server, run `Run prototype.bat` under `prototype`folder - launched server will be available in your web browser at [localhost:8080](//localhost:8080).

### Developing for extension
In order to develop the web extension, you need to download developer version of Chrome - [Chrome Canary](https://www.google.com/chrome/browser/canary.html).
This will enable latest functions and technologies available for debugging the extension as well as support for ES7 (ECMAScript 2017 - *as known as latest version of JavaScript*) features.

To deploy web extension on Canary...
* open context menu from the top right-hand corner;
* select `More tools` and click `Extensions` *(a new window will open)*;
* enable developer mode by enabling a checkbox;
* click `Load unpacked extension...`;
* navigate to project location on local hard drive and select `extension` folder;
* press `OK` to finish.

Now the extension is ready to run and debugged!
All changes made locally can be enabled by "reloading" the extension by pressing `CRTL + R` on the extension page.

### Developing for server
In order to develop for the server/portal, you need [Node.js (latest)](https://nodejs.org/en/).
Open a terminal in `server` folder, where `package.json` and `server.js` are located - run command
```
npm install
```
This will take time - all dependencies for the server will be downloaded to `node_modules` folder where the server can access them later.

Upon downloading, you can run the server in `PRODUCTION` or `DEVELOPMENT` mode.
Obviously, when developing for the server, development environment is desired - this can be obtained by typing
```
npm run develop
```
into the terminal.
This starts *Nodemon*, which automatically listens for updates made on the server and automatically restarts whenever there's a change.
In case of a critical error, you have to restart *Nodemon* by typing `rs` into the same terminal window.

Please be vary of existing design patterns and always reference to [Chrome Extension API](https://developer.chrome.com/extensions/browserAction).

### Guide to usage
1. Go to https://krvrkv.github.io/EMS/
>this is the landing page of our platform, where you can ented as a specialist or download the extension as a test subject
2. Press "Sign up/Sign in"
>to take a main route of a specialist
3. Sign up/Sign in again (login window)
>to enter the system
4. Project -> New project -> Start a new session
5. "Run" in the popup window
6. Record -> Stop -> Create report
7. Choose type of the report for the output 

## 6. Credits

### Member's contribution
* Sergei: Landing page (by adding his description as a team member), Dashboard (inital version) with the Dashboard Page counter, Chrome Store page using Photoshop (w/ Erik)
Not coding related: Video (directing the animation), Marketing campaign (for startup events) & User Research Coordination (for testing the prototype);
* Erik: Landing page (adding video & editing about sections), Login page (w/ Vanessa), Chrome Store page (w/ Sergei), Platform page (whole menu besides "Start new session" - it was done by Vanessa), Dashboard and report generation pages (help and guidance for Vanessa), getting the prototype into github.io
Not coding related tasks: Video animation (that was used on the landing page) & the Adobe Xd prototype (that was used as a mockup to create the platform), helped with User Research (for testing the prototype);
* Vanessa: The whole landing page using a template, Login page (w/ Erik) HTML and styles, Password reset page HTML and styles, Start new session popup HTML and styles, Contact us page HTML and styles, Dashboard page HTML and styles (except counter/stopper - it was done by Sergei), Report creating page HTML and styles.
Not coding related tasks: initial video idea, helped with User Research (for testing the prototype);

>As it was mentioned before, we've got a new github repository because Risto, for his personal reasons, has sent me all the files and has deleted our initial repository from his account, thus every previous commit data got lost and the only one that is present is in the new repository. You might also notice that in the new repository there are no commits from Sergei. He has done his part by helping me and Vanessa when we were gathering to do the group work because he was specialising in certain aspects that he has worked on before in our previous repository (e.g. dashboard). He was consulting and taking hold of our computers to perform some coding because re-logging into his own account and perform all the syncs would've been too much time-consuming (as well as he had no access to his personal computer).

### Author's contribution
* Creating a user-friendly development platform for the prototype (tutorial found above)
* Building browser extension based on Chrome/Web Extensions API (user tracking algorithms)ss
* Building a NodeJS server (REST API)
* Establishing data connections between browser extension and server via database (data traffic)
* Data calculations (algorithms)
>As of 11.05.2017 the original Author will **not** contribute any code to this project and will take the role of a mentor.

## License
View LICENCE file.

## Milestones and issues:
Visible under "Issues" tab.
