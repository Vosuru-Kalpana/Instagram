import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import Profilepage from './src/containers/Profilepage'
import Followpage from './src/containers/Followpage'
import SwitchAccount from './src/containers/SwitchAccount'
import Signuppage from './src/containers/Signuppage'
import LogInpage from './src/containers/LogInpage'
import Page6 from './src/containers/Page6'

const App = () => {
  return (

    <View style={{flex:1, backgroundColor:"black"}}>
      <StatusBar backgroundColor="black" />

      {/* <Text style={{color:"white"}}>Kalpana</Text>
      <Text style={{color:"white"}}>Vosuru</Text> */}

      {/* <Profilepage /> */}

      {/* <Followpage /> */}

      {/* <SwitchAccount /> */}

      {/* <Signuppage /> */}

      {/* <LogInpage /> */}

      <Page6 />

    </View>
  )
}

export default App