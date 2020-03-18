# Orthoph-on

## About the application
Orthoph'on is a school project wich has the purpose to help disabled people or the people in need of reeducation, in a recreative way. The project consist of a desktop application thought to be used by everyone and avalaible on every platform.

Our main concernes while developping the app was to make the use of it **easy to use** and **understandable** for everyone.

The application consist of multiple cognitive games to preserve the brain activity of our users. For there is only few games avalable but we want to implement a much bigger library if the project continues


## Developement
### Requires
As the project is a electron based application you will need those softwares and extentions to develop:
* NodeJS
* NPM
* Electron (note that a `npm install` inside the repo should install electron package)

We have made the choice not to use any frameworks to make the project easyer to maintain

Find the project website by following this [link](https://mr-monster-0248.github.io/HiveTech-website/index.html)

### Try and run the project
Make sure you're in the right folder with your terminal then:
1. Run `npm install` to install all the dependancies (if it has not been done before)
2. Then run `npm start` wich will build and start the application according to the `package.json` file

The application should popup and you will be able to try it, if any issues please feel free to leave an issue.

### Building packages
To use all the potential of a electron base application and to make the user installation easyer and more convenient for everyone you want to build all the distributions pakages by following the next commands
#### For Windows
```
npm run package-win
```
#### For MacOS
```
npm run package-mac
```
#### For Linux
```
npm run package-linux
```
