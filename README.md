# README

Welcome! This README will guide you through the setup process and functionality.

## Getting Started

To get started with this Express app, follow these steps:

1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/ardensasan/landchecker-backend-nodejs.git
   
2. Navigate to project directory:
   ```bash
   cd landchecker-backend-nodejs

3. Install dependencies [Node](https://nodejs.org/) must be installed to run package manager:
   ```bash
   npm install

4. Start the development server:
   ```bash
    npm start


Default host is on http://localhost:3000/

To run tests use command:
   ```bash
   npm test
   ```
 
Available Endpoints
   ```bash
   /lgas/list (GET)
   /lgas/:id (GET)
   /properties/list (GET)
   /properties/:id (GET)
   ```

For swagger documentation
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



