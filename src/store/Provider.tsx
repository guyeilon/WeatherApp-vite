import * as React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import getStore from 'store';

const StoreProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const { persistor, store } = getStore;
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default StoreProvider;
