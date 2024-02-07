import express from "express"
import { requestParamsValidator, requestQueryValidator } from "./middleware";
import { getLGAByIdController, getLGAListController, getPropertiesListController, getPropertyByIdController, wildcardPathController } from "./controller";
import { GET_BY_ID_SCHEMA, GET_LIST_SCHEMA } from "./constants";
const route = express.Router();

/**
 * @swagger
 * /lgas/list:
 *   get:
 *     summary: Returns a list of lga data.
 *     parameters:
 *          - in: query
 *            name: page
 *            schema:
 *              type: integer
 *            description: The page used for paginating list
 *     description: Returns an lga data.
 *     responses:
 *       200:
 *         description: Returns a list of lga data.
 *       400:
 *         description: Returns an error for invalid page query.
 */
route.get('/lgas/list', requestQueryValidator(GET_LIST_SCHEMA), getLGAListController)
/**
 * @swagger
 * /lgas/{id}:
 *   get:
 *     summary: Returns an lga data.
 *     parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *     description: Returns an lga data.
 *     responses:
 *       200:
 *         description: Returns a lga data json.
 *       400:
 *         description: Returns an error for invalid id parameter.
 *       404:
 *         description: Return an error for non existing id.
 */
route.get('/lgas/:id', requestParamsValidator(GET_BY_ID_SCHEMA), getLGAByIdController)
/**
 * @swagger
 * /properties/list:
 *   get:
 *     summary: Returns a list of properties.
 *     description: Returns a list of properties.
 *     responses:
 *       200:
 *         description: Returns a list of properties.
 */
route.get('/properties/list', getPropertiesListController)
/**
 * @swagger
 * /properties/{id}:
 *   get:
 *     summary: Returns a property data.
 *     parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: integer
 *            required: true
 *     description: Returns a property data.
 *     responses:
 *       200:
 *         description: Returns a property data json.
 *       400:
 *         description: Returns an error for invalid id parameter.
 *       404:
 *         description: Return an error for non existing id.
 */
route.get('/properties/:id', requestParamsValidator(GET_BY_ID_SCHEMA), getPropertyByIdController)
route.all('*', wildcardPathController)

export default route;