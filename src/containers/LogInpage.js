import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
//import { TouchableOpacity } from 'react-native-gesture-handler'
import MaterialIcons from 'react-native-vector-icons/Feather'
import { hp, wp } from '../common/Dimension'

const LogInpage = () => {
  return (
      
    <View style={{flex:1,backgroundColor:"black",flexDirection:"column",justifyContent:"space-between"}}>
        <View>
            <View style={{alignItems:"center",justifyContent:"center",paddingTop:hp(20)}}>
                <Text style={{color:"white", fontSize:wp(10)}}>Instagram</Text>
            </View>
            <View style={{paddingTop:hp(3),paddingLeft:wp(8),paddingRight:wp(8)}}>
                <TextInput
                    style={{color:"gainsboro",fontSize:wp(3),paddingLeft:wp(5),paddingTop:hp(1.5),alignItems:"center",justifyContent:"center",height:hp(6),borderWidth:1, backgroundColor:"grey"}}
                    placeholder="Phone number, email or username"
                    placeholderTextColor="white"
                />
            </View>
            <View style={{paddingTop:hp(3),paddingLeft:wp(8),paddingRight:wp(8)}}>
                <TextInput
                    style={{color:"gainsboro",fontSize:wp(3),paddingLeft:wp(5),paddingTop:hp(1.5),alignItems:"center",justifyContent:"center",height:hp(6),borderWidth:1, backgroundColor:"grey"}}
                    placeholder="Password"
                    placeholderTextColor="white"
                    secureTextEntry={true}
                />
            </View>
            <View style={{paddingTop:hp(3),paddingLeft:wp(8),paddingRight:wp(8),justifyContent:"center"}}>
                <TouchableOpacity style={{backgroundColor:"#4169e1",borderWidth:1,borderColor:"#4169e1",alignItems:"center",height:hp(6),justifyContent:"center"}}>
                    <Text style={{color:"white",paddingTop:hp(0.9),paddingLeft:wp(2),fontSize:wp(3),justifyContent:"center",alignItems:"center",marginBottom:hp(1)}}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <View style={{paddingTop:hp(3),flexDirection:"row",justifyContent:"space-between",paddingRight:wp(2)}}>
                <Text style={{color:"gainsboro",fontSize:wp(3),paddingLeft:wp(20)}}>Forgot your login details?</Text>
                <View>
                    <TouchableOpacity style={{paddingRight:wp(25)}} >
                        <Text style={{color:"white",fontSize:wp(3),fontWeight:"bold"}}>Get help logging in.</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{paddingTop:hp(3),paddingLeft:wp(48)}}>
                    <Text style={{color:"gainsboro"}}>OR</Text>
            </View>
            <View style={{flexDirection:"row"}}>
                <View style={{paddingTop:hp(2.5),paddingLeft:wp(30)}}>
                    <MaterialIcons name="facebook" size={24} color="#4169e1" />
                </View>
                <TouchableOpacity>
                    <View style={{paddingTop:wp(5),paddingLeft:wp(1)}}>
                        <Text style={{color:"#4169e1"}}>Log In with Facebook</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

        <View style={{flexDirection:"row",bottom:0,paddingLeft:wp(35),height:hp(5),borderTopWidth:1,width:"100%",borderTopColor:"#778899",paddingTop:hp(1)}}>
            <Text style={{color:"gainsboro",fontSize:wp(3)}}>Don't have an account?</Text>
            <TouchableOpacity>
                <Text style={{color:"white",fontSize:wp(3.5),fontWeight:"bold"}}>Sign up</Text>
            </TouchableOpacity>
        </View>
        
        {/* <View>
            <View>
                <Text style={{color:"white"}}>Kalpana</Text>
            </View>
        </View>

        <View>
            <View>
                <Text style={{color:"white"}}>Kalpana</Text>
            </View>
        </View> */}
    
    </View>

  )
}

export default LogInpage