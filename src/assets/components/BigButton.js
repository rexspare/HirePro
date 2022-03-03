import { View, Text, Button } from 'react-native'
import React from 'react'

export default function BigButton(props) {
  return (
    <Button title={props.tet} onPress={props.onpr()} />
  )
}