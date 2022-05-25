import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
//import { TouchableOpacity } from 'react-native-gesture-handler'
//import { Dropdown } from 'react-native-element-dropdown';
import { hp, wp } from '../common/Dimension'

const Signuppage = () => {
  return (
    <View style={{flex:1,backgroundColor:"black"}}>
        
        <View style={{alignItems:"center",justifyContent:"center",paddingTop:hp(30)}}>
            <Text style={{color:"white", fontSize:wp(10)}}>Instagram</Text>
        </View>
        <View style={{paddingTop:hp(5),paddingLeft:wp(15),paddingRight:wp(15)}}>
            <TouchableOpacity style={{paddingLeft:wp(20),paddingTop:hp(1),borderWidth:1, borderColor:"#4169e1",height:hp(5),backgroundColor:"#4169e1"}}>
                <Text style={{color:"white",paddingRight:wp(10),alignItems:"center",justifyContent:"center"}}>Create new account</Text>
            </TouchableOpacity>
        </View>

        <View style={{paddingLeft:wp(45),paddingTop:hp(3)}}>
            <TouchableOpacity>
                <Text style={{color:"#4169e1",paddingRight:wp(10)}}>Log In</Text>
            </TouchableOpacity>
        </View>

    </View>
  )
}

export default Signuppage