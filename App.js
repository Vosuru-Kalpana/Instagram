import React from 'react'
import { View, Text, StatusBar } from 'react-native'


const App = () => {
  return (

    <View style={{flex:1, backgroundColor:"black", alignItems:"center", justifyContent:"center"}}>
      <StatusBar backgroundColor="black" />

      <Text style={{color:"white"}}>Kalpana</Text>
      <Text style={{color:"white"}}>Vosuru</Text>

    </View>
  )
}

export default App