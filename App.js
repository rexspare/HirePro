import { View, Text } from 'react-native'
import React from 'react'
import BigButton from './src/assets/components/reusable/BigButton'
import RootNavigation from './src/navigation/RootNavigation'

import { Provider } from 'react-redux';
import store from './src/redux/store'

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  )
}