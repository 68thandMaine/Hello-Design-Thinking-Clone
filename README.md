# Hello Design Thinking / IDEO U Clone
<sup>**Designed By:** _Chris Rudnicky_</sup>  
<sup>_January 25th, 2019_</sup>

---

## Table of Contents

**[Description](#description)**<br>
**[Current Features and Future Plans](#current-features-and future-plans)**<br>
**[Installation Instructions](#installation-instructions)**<br>
**[Application Specs](#application-specs)**<br>
**[Known or Potential Errors](#known-or-potential-errors)**<br>
**[Technologies Used](#technologies-used)**<br>
**[Acknowledgements](#acknowledgements)**<br>
**[Further Help](#further-help)**

---
## Description

This project is an exercise using Angular 5 to recreate/clone a website that was listed on the [Made with Angular Website](https://www.madewithangular.com/#/).

I have chosen to clone [Hello Design Thinking / IDEO U](https://hellodesignthinking.ideou.com/#/).
IDEO U is an online school where anyone can unlock their creative potential to solve problems.

---
## Current Features and Future Plans

Currently the application is in shambles, but the pieces are coming together. There is a user class, and different functionalities that are not hooked up yet.

My plan is for the clone to look as similar as possible to the original, and to have the ability to create a user object, persist it in Firebase, and for  user to be able to edit their information.

- 1/31 - Create a new user and save to Firebase [ Goal Met ]
- 2/1 - Add authentication  and the ability for a user to edit their information [ added authentication ]
- 2/2 - Add the ability for a user to edit their information / styling


2/1/19
Currently five branches:

| Branch Name | Purpose/Features | Status | Date of Merge |
|----|----|----|----|
|master| This branch will contain code that is ready to be submitted | As of 1/31 this branch only displays buttons and a nav-bar. Not functional| N/A|
|testBranch| This branch will be used to test if features work with each other before being merged with master| Currently the test branch has the capability to register new users and to add authentication. | Merged to master 2.1.19 |
|createNewUser|This branch contains the form for creating a new user. I have hooked up the inputs to a method that persists data to Firebase. Will merge with master once the user view is available| Merged into testBranch. Can create objects in Firebase | 1.31.19 |
|afterLogin| This branch contains a simple form that allows a user to change their information| Dabbling around with trying to match the email from the auth to the email stored in the firebase db |N/A|
|login| This branch contains the code for testing if I can successfully see a user's credentials after they log in with an email and password| Can see a user data returned from console.log() inside login. Need to add code to show certain things if logged in | Merged into testBranch 2.1.19 |




---

## Installation instructions

To use this app, first clone the repositiory from [GitHub](https://github.com/68thandMaine/Hello-Design-Thinking-Clone.git). Once the app has been appropriately cloned the app can be accessed by using the following commands in the terminal:
1. `$npm install`
  - This command will install all the dependencies listed in the package.json file.
2. In the current state (as of 1/25/19), this project will only be running in a development environment. See the section below on how to set up the development.
3. Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Development server

>  Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

> Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.


<sub>_If there are any errors encountered while installing the Hello Design Thinking / IDEO U Clone see [Known or Potential Errors](#known-or-potential-errors) for help_</sub>

---
## Application Specs

Testing has not been implemented as of 1/25/19

---
## Known or Potential Errors

Currently this app is in development. If you are reading this - the app is not functional at all.

---
## Technologies Used

  The Hello Design Thinking Clone was built using:
- [Angular 5](https://angular.io/)
- [Jasmine](https://jasmine.github.io/)
- [Javascript - ES6](http://es6-features.org/#Constants)
- [jQuery](https://jquery.com/)
- [Karma](https://karma-runner.github.io/latest/index.html)
- [Node Package Manager](https://www.npmjs.com/get-npm)



---
## Acknowledgements
- Without the help and guidance of the Epicodus JavaScript Curriculum I would not have been able to create this application.
- [Made with Angular Website](https://www.madewithangular.com/#/)
- This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

---

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
