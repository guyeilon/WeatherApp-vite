import { configureStore } from '@reduxjs/toolkit';
import reducer from 'store/reducers';
import { persistStore } from 'redux-persist';

const createStore = () => {
  const store = configureStore({ reducer, middleware: [] });

  const persistor = persistStore(store);

  return { store, persistor };
};

const store = createStore();

export type RootState = ReturnType<typeof store.store.getState>;

export type AppDispatch = typeof store.store.dispatch;

export default store;
