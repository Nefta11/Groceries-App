import { View, Text, Button } from 'react-native'
import React from 'react'

const HomeScreen = () => {

  const loadProducts=async()=>{
    console.log("Hola AMor")
  }
  return (
    <View>
    <Button title='Cargar' onPress={loadProducts}></Button>
    </View>
  )
}

export default HomeScreen