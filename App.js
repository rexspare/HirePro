import { View, Text } from 'react-native'
import React from 'react'
import RootNavigation from './src/navigation/RootNavigation'
import TestCompo from './TestCompo';
import { Provider } from 'react-redux';
import store from './src/redux/store'

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
      {/* <TestCompo /> */}
    </Provider>
  )
}