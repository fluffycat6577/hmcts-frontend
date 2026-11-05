# DTS Developer Technical Test
## Introduction
This repository contains this candidates implementation of the frontend for the DTS Developer Technical Test.

## Technical Notes
### Implementation
The frontend application is implemented using [NextJS](https://nextjs.org/), a library that provides built-in routing and page handling, built upon [NodeJS](https://nodejs.org/en). Styling is handled with [TailwindCSS](https://tailwindcss.com/), and functionality is implemented using [React](https://react.dev/).

Unit Testing is implemented using [Vitest](https://vitest.dev/guide/), a testing framework with specific functionality for testing React components and simulating user interactions.

### Connecting to the Server
For the purpose of this demonstration, the environment file ".env.local" is provided, which stores variables that point to the address of the backend server. You may need to alter the port number of "API_URL_HTTP" if the backend application starts from a different port. Please note that neither the frontend or backend are currently configured to communicate over a HTTPS connection. However, for demonstration and testing purposes, this was deemed acceptable.

For example, the .env.local file should look something like this:
```
API_URL_HTTPS="https://localhost:7290"
API_URL_HTTP="http://localhost:5191"
ENDPOINT="/task"
```

If you need to change the server address, modify the "API_URL_HTTP" line. Do NOT rename any of the variables. Doing so will result in the program not working as intended.

### Running the Application
After downloading/cloning the repository, navigate to the project directory via a terminal and enter the command:

```Bash
npm install
```

or

```Bash
npm ci
```

This will install the required dependencies for the project and allow you to run it. Once this process has finished, use the following command to launch the application:

```Bash
npm run dev
```

If it does not open automatically, launch your browser and connect to the localhost via the port configured by npm (usually this will be port 3000).

### Running Unit Tests
The test suite can be run by navigating to the project directory and typing the following command:

```Bash
npm run test:run
```

Alternatively, you can run Vitest separately with the command:

```Bash
npm test
```

This version of the command will run all tests located in the tests directory, but will continue to run vitest for monitoring the application in the terminal until manually exited.

### Important Notes
Please note that for the frontend application to function, the backend server MUST be running at the same time. The frontend will have no data to display if it cannot connect to the backend server resulting in only the static menu items being rendered.
