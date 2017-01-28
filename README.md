## Halo 5 Warzone Clan Roster

## Description

This app is a roster management tool specifically designed for Halo 5 Warzone enthusiast clans. Squad assignments and positions are taken from the Warzone strategy popularized by the [Halo Wheelmen.](http://www.halowheelmen.com/) Admin capability is available for anyone who can find the Admin link in the footer.

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.25.5.

## Access online

This app is hosted by Google Firebase and can be viewed here: https://js-roster.firebaseapp.com/

## Setup and Install

#### Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Bower](https://bower.io/)
* [Angular2 CLI](https://cli.angular.io/)
* [AngularFire2](https://angularfire2.com/api/)

#### Installation

Clone this repository and navigate to the repository directory in the command line. Run the following commands in order:

    > npm install
    > bower install
    >


This project uses the Firebase cloud service to store data. You'll need a Firebase account to setup the app. Create an account at http://firebase.google.com, then you should be taken to a user dashboard area with an option to Create a New Project. Select this option, provide a name for your new project, and select your Country/region from the drop-down menu. You'll then be taken to an "Overview" area. Where you'll be offered three options:

    Add Firebase to your iOS app
    Add Firebase to your Android app
    Add Firebase to your web app
Select Add Firebase to your web app. Firebase should respond with a pop-up modal window. Create a new file called `api-keys.ts` in the `src/app` directory. Then, place the Firebase credentials from the modal window in it like this:

                  export var masterFirebaseConfig = {
                    apiKey: "xxxx",
                    authDomain: "xxxx.firebaseapp.com",
                    databaseURL: "https://xxxx.firebaseio.com",
                    storageBucket: "xxxx.appspot.com",
                    messagingSenderId: "xxxx"
                  };
Now, from the Firebase Console, select the Database option from the navbar on the left, then choose RULES from the blue navbar at the top of the page. Change both the ".read", and ".write" properties here to "true" like this:

          {
            "rules": {
              ".read": true,
              ".write": true
            }
          }


#### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Further help

To get more help on the `angular-cli` use `ng help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Future Version Features

* Clean up visual style.
* Add more info to Member entries.
* Member detail pages.
* Authentication

### License

This project is licensed under the MIT license.

Copyright (c) 2017 **Brad Copenhaver**
