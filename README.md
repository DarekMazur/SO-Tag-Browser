# :bookmark: Tag Browser Application

This application serves as a user interface for browsing tags from StackOverflow's API. Users can explore a paginated table of tags along with the number of related posts. Additionally, they can configure the number of items per page through a numerical field above the table and choose sorting fields and directions.

## Functionality :bulb:

The application provides the following functionalities:

* Paginated table of tags from the StackOverflow API
* Configuration of the number of items per page
* Selection of sorting fields and directions

## Requirements :warning:

### Runtime Environment
* Node.js v20.11.1
* npm 10.2.4
* Vite 5.2.0
* React 18.2.0
* Material-UI (mui) 5.15.14
* Redux 9.1.0
* Redux Toolkit 2.2.2

### Testing Environment
* vitest 1.4.0
* React Testing Library 14.2.2
* Mock Service Worker 2.2.13
* mwsjs data 0.16.1

## Installation :gear:
To install the application, follow these steps:

Clone the repository from GitHub:

```bash
git clone https://github.com/DarekMazur/SO-Tag-Browser-Application.git
```


Install dependencies using npm:

```bash
npm ci
```

Start the development server:

```bash
npm start
```


The server will run on port 5173.

## Storybook :book:
To view components in isolation, run Storybook:

```bash
npm run storybook
```

Storybook will be available at port 6006.

## Deployment :rocket:
If you wish to deploy the application, follow these additional steps:

Add the following command to the "scripts" section in the package.json file:

```json
"build": "tsc && vite build"
```

Run the build command:

```bash
npm run build
```