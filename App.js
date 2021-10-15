import React from 'react';
import Main from './components/MainComponent';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { PersistGate } from 'redux-persist/integration/react';
import Loading from './components/LoadingComponent';

const { persistor, store } = ConfigureStore();

LogBox.ignoreLogs(['interpolate', 'It appears that you are using old', 'VirtualizedLists should never']);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={<Loading />}
        persistor={persistor}
      >
        <Main />
      </PersistGate>
    </Provider>
  );
}