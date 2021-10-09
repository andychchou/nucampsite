import React from 'react';
import Main from './components/MainComponent';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

LogBox.ignoreLogs(['interpolate', 'It appears that you are using old', 'VirtualizedLists should never']);

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}