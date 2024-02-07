# About

This repository contains an Express API designed to handle requests related to LGAs (Local Government Areas) and properties. The API provides endpoints for retrieving information about LGAs and properties.

Sample hostname deployed on AWS without the /api-docs endpoint\
    ```
    https://ts28dcnof1.execute-api.us-east-1.amazonaws.com/dev/
    ```

## Getting Started

To get started with this Express app, follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/ardensasan/landchecker-backend-nodejs.git
   
2. Navigate to project directory:
   ```bash
   cd landchecker-backend-nodejs

3. Install dependencies\
[Node](https://nodejs.org/) must be installed to run package manager:\
For more information visit [FreeCodeCamp How To Install Node JS and NPM](https://www.freecodecamp.org/news/how-to-install-node-js-and-npm-on-windows-2/)
   ```bash
   npm install

4. Start the development server:
   ```bash
    npm start


Default host is on localhost and port is 3000

To run tests use command:
   ```bash
   npm test
   ```
 
Available Endpoints
   ```bash
   /lgas/list (GET) Retrieves a list of LGAs.
   /lgas/:id (GET) Retrieves information about a specific LGA identified by its id.
   /properties/list (GET) Retrieves a list of properties.
   /properties/:id (GET) Retrieves information about a specific property identified by its id.
   ```
Error Handling
```
    404 Status Code: The API returns a 404 status code if the requested id cannot be found in the database.
    400 Status Code: If the :id parameter is not a valid integer, the API returns a 400 status code.'
    500 Status Code: Any other error
```
Successful Requests
```
    200 Status Code: Successful requests return a 200 status code along with the JSON representation of the requested data.
```

Swagger Documentation
```bash
   /api-docs/
```

Postgre Credentials\
Credentials are set in constants.ts
```bash
const DATABASE_CREDENTIALS = {
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'admin',
}
```



