import { createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
import { persistStore, persistReducer } from 'redux-persist'
import {AsyncStorage} from 'react-native';


const persistConfig = {
    key: 'root',
    storage:AsyncStorage,
    whitelist: ['likedJobs']
  }

const persistreducer = persistReducer(persistConfig, reducers)
export const store = createStore(
    persistreducer  ,
    {},
    compose(
        applyMiddleware(thunk)
    )
);
export const persistor= persistStore(store)
