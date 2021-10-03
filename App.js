import React from 'react';
import Main from './components/MainComponent';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['interpolate', 'It appears that you are using old', 'VirtualizedLists should never']);

export default function App() {
  return (
    <Main />
  );
}