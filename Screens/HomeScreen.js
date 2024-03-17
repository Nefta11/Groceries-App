import { View, Text, Button } from 'react-native'
import React from 'react'
import { getProducts } from '../api'

const HomeScreen = () => {

  const loadProducts=async()=>{
    const result = await getProducts()
    console.log(result)
  }
  return (
    <View>
    <Button title='Cargar' onPress={loadProducts}></Button>
    </View>
  )
}


export default HomeScreen