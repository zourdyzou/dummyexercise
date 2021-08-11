import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";
import { rootReducer } from "./root-reducer";

const sagaMiddleware = createSagaMiddleware();

const middleWare = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middleWare.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleWare));

// sagaMiddleware.run();

export { store };
