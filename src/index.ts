import express from "express"
import route from "./routes";
import { errorCatcher } from "./middleware";
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
const app = express();
const port = 3000;

const swaggerSpec = swaggerJSDoc({
    definition: {
      openapi: '3.0.0', 
      info: {
        title: 'LandChecker API with Swagger',
        version: '1.0.0',
        description: 'Documentation for LandChecker API',
      },
    },
    apis: ['src/routes.ts'],
  });
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(route)
app.use(errorCatcher)
app.listen(port, () => {
    console.log(`Server is listenning on http://localhost:${port}/`)
})

