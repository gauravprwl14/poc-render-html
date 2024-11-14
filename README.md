# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

Run one of these commands to install dependencies:

```bash
npm install
# or
yarn install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

**Important**: Always run this command before starting the server as it generates the compiled JS files needed for HTML generation.

### `npm run server`

Starts the server that handles the report generation.\
The server exposes a POST endpoint at `/data` which can be accessed via Postman.

### Input and Output

- Sample input data is located in the `sample input` folder, specifically `input_2.ts`
- Generated reports will be saved in the `output` folder as HTML files

### Generate the HTML Usage

1. Install dependencies: `npm install` or `yarn install`
2. Build the project: `npm run build`
3. Start the server: `npm run start:server`
4. Send a POST request to `/data` endpoint using Postman
5. Check the `output` folder for the generated HTML report

**Important**: Currently I am simulating the POST END, data send the in the request body is not used. Instead input_2.ts file is used as the sample Input

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
