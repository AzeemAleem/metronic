import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { persistStore } from 'redux-persist';

import rootReducer from '../modules/rootReducer';
import rootSaga from '../modules/rootSaga';

export default function configureStore(initialState) {
	const sagaMiddleware = createSagaMiddleware();
	const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware)));
	sagaMiddleware.run(rootSaga);
	// const persistor = persistStore(store);
	return { store};
}
