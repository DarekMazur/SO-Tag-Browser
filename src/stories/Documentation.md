# Tag Browser Application

This application serves as a user interface for browsing tags from StackOverflow's API. Users can explore a paginated table of tags along with the number of related posts. Additionally, they can configure the number of items per page through a numerical field above the table and choose sorting fields and directions.

## Table of Contents

1. [Functionality](#1-functionality)
2. [Requirements](#2-requirements)
   1. [Runtime Environment](#21-runtime-environment)
   2. [Testing Environment](#22-testing-environment)
3. [Project Structure](#3-project-structure)
4. [Installation](#4-installation)
5. [Storybook](#5-storybook)
6. [Pagination](#6-pagination)
7. [Deployment](#7-deployment)

## 1. Functionality

The application provides the following functionalities:

* Paginated table of tags from the StackOverflow API
* Configuration of the number of items per page
* Selection of sorting fields and directions

## 2. Requirements

### 2.1 .Runtime Environment
* Node.js v20.11.1
* npm 10.2.4
* Vite 5.2.0
* React 18.2.0
* Material-UI (mui) 5.15.14
* Redux 9.1.0
* Redux Toolkit 2.2.2

### 2.2. Testing Environment
* vitest 1.4.0
* React Testing Library 14.2.2
* Mock Service Worker 2.2.13
* mwsjs data 0.16.1

## 3. Project Structure
```
react-content-manager/
  ├── src/
  │   ├── assets/           # Application assets
  │   ├── components/       # Application components
  │   ├── hooks             # Application custom hooks
  │   ├── i18n/             # Translation files
  │   ├── mocks/            # Mocked data
  │   ├── providers         # Application providers
  │   ├── store/            # Application store
  │   ├── stories/          # Global storybook files
  │   ├── types/            # Types
  │   ├── main.tsx          # Main react ts file
  │   ├── setupTest.ts      # Tests config file
  │   ├── vite-env.d.ts     # Configuration for Vite env
  │   ├── App.tsx           # Main application component
  │   ├── index.tsx         # Application main container
  │   ├── setupTest.ts      # Tests main configuration
  │   ├── test-utils.tsx    # Tests helpers
  │   └── vite-env.d.ts     # Vite ENV configuration
  ├── .eslintrc             # Linter configuration
  ├── .gitignore            # Ignore list for git
  ├── .lintstagedrc.json    # Lint Staged configuration
  ├── .prettioerignore      # Ignore list for Prettier
  ├── .prettierrc           # Prettier configuration
  ├── index.html            # Entry file
  ├── package.json          # A manifest file for Node.js projects
  ├── package-lock.json     # npm dependencies (You won’t change this file directly!)
  ├── README.md             # Application documentation (current file)
  ├── tsconfig.json         # TypeScript configuration
  ├── tsconfig.node.json    # TypeScript configuration
  └── vite.config.js        # Vite configuration
```

## 4. Installation
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

## 5. Storybook
To view components in isolation, run Storybook:

```bash
npm run storybook
```

Storybook will be available at port 6006.

## 6. Pagination
The application has a pagination function with the ability to select the number of displayed items on a page. The default version is based on selecting a value from the dropdown list. To change the selectable values edit the elements of the variable perPageCount (an array that accepts values of type number) in the file 
```markdown
src/assets/components/Molecules/Pagination/Pagination.tsx
```

Alternatively, you can also use an input field of type number, accepting any numeric value. To change the type of element responsible for selecting the number of displayed elements, go to the alt-per-page-pagination branch with the command

```bash
git switch alt-per-page-pagination
```
or

```bash
git checkout alt-per-page-pagination
```

## 7. Deployment
If you wish to deploy the application, follow these additional steps:

Add the following command to the "scripts" section in the package.json file:

```json
"build": "tsc && vite build"
```

Run the build command:

```bash
npm run build
```