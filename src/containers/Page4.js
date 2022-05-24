import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
//import { Dropdown } from 'react-native-element-dropdown';

const Page4 = () => {
  return (
    <View style={{flex:1,backgroundColor:"black"}}>
        
        <View style={{alignItems:"center",justifyContent:"center",paddingTop:200}}>
            <Text style={{color:"white", fontSize:30}}>Instagram</Text>
        </View>
        <View style={{paddingTop:30,paddingLeft:20,paddingRight:20}}>
            <TouchableOpacity style={{paddingLeft:75,paddingTop:5,borderWidth:1, borderColor:"#4169e1",height:35,backgroundColor:"#4169e1"}}>
                <Text style={{color:"white",alignItems:"center",justifyContent:"center"}}>Create new account</Text>
            </TouchableOpacity>
        </View>

        <View style={{paddingLeft:140,paddingTop:20}}>
            <TouchableOpacity>
                <Text style={{color:"#4169e1"}}>Log In</Text>
            </TouchableOpacity>
        </View>

    </View>
  )
}

export default Page4