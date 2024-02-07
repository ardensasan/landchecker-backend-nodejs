import express from "express"
import { requestParamsValidator, requestQueryValidator } from "./middleware";
import { getLGAByIdController, getLGAListController, getPropertiesListController, getPropertyByIdController, wildcardPathController } from "./controller";
import { GET_BY_ID_SCHEMA, GET_LIST_SCHEMA } from "./constants";
const route = express.Router();

route.get('/lgas/list', requestQueryValidator(GET_LIST_SCHEMA), getLGAListController)
route.get('/lgas/:id', requestParamsValidator(GET_BY_ID_SCHEMA), getLGAByIdController)
route.get('/properties/list', getPropertiesListController)
route.get('/properties/:id', requestParamsValidator(GET_BY_ID_SCHEMA), getPropertyByIdController)
route.all('*', wildcardPathController)

export default route;