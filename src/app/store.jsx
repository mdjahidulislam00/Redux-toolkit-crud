import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Features/counter/counterSlice";
import todosSlice from "./Features/todos/todosSlice";
import storage from 'redux-persist/lib/storage'
import { persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({
  counter: counterSlice,
  user: todosSlice
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer
});

export default store;
