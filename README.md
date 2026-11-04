# DTS Developer Technical Test
## Introduction
This repository contains this candidates implementation of the frontend for the DTS Developer Technical Test.

## Technical Notes
### Implementation
The frontend application is implemented using NextJS, a library that provides built-in routing and page handling, built upon NodeJS. Styling is handled with TailwindCSS, and functionality is implemented using React.

### Connecting to the Server
For the purpose of this demonstration, the environment file ".env.local" is provided, which stores variables that point to the address of the backend server. You may need to alter the port number of "API_URL_HTTP" if the backend application starts from a different port. Please note that neither the frontend or backend are currently configured to communicate over a HTTPS connection. However, for demonstration and testing purposes, this was deemed acceptable.

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

### Important Notes
Please note that for the frontend application to function, the backend server MUST be running at the same time. The frontend will have no data to display if it cannot connect to the backend server resulting in only the static menu items being rendered.
