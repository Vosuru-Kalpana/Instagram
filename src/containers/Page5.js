import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
//import { TouchableOpacity } from 'react-native-gesture-handler'
import MaterialIcons from 'react-native-vector-icons/Feather'

const Page5 = () => {
  return (
      
    <View style={{flex:1,backgroundColor:"black",flexDirection:"column",justifyContent:"space-between"}}>
        <View>
            <View style={{alignItems:"center",justifyContent:"center",paddingTop:130}}>
                <Text style={{color:"white", fontSize:30}}>Instagram</Text>
            </View>
            <View style={{paddingTop:20,paddingLeft:20,paddingRight:20}}>
                <TextInput
                    style={{color:"gainsboro",fontSize:10,paddingLeft:20,paddingTop:12,alignItems:"center",justifyContent:"center",height:40,borderWidth:1, backgroundColor:"grey"}}
                    placeholder="Phone number, email or username"
                    placeholderTextColor="white"
                />
            </View>
            <View style={{paddingTop:12,paddingLeft:20,paddingRight:20}}>
                <TextInput
                    style={{color:"gainsboro",fontSize:10,paddingLeft:20,paddingTop:12,alignItems:"center",justifyContent:"center",height:40,borderWidth:1, backgroundColor:"grey"}}
                    placeholder="Password"
                    placeholderTextColor="white"
                    secureTextEntry={true}
                />
            </View>
            <View style={{paddingTop:15,paddingLeft:20,paddingRight:20,justifyContent:"center"}}>
                <TouchableOpacity style={{backgroundColor:"#4169e1",borderWidth:1,borderColor:"#4169e1",alignItems:"center",height:37,justifyContent:"center"}}>
                    <Text style={{color:"white",paddingTop:20,paddingLeft:3,fontSize:12,justifyContent:"center",alignItems:"center",marginBottom:20}}>LOGIN</Text>
                </TouchableOpacity>
            </View>
            <View style={{paddingTop:10,flexDirection:"row",justifyContent:"space-between",paddingRight:65}}>
                <Text style={{color:"gainsboro",fontSize:10,paddingLeft:50}}>Forgot your login details?</Text>
                <View>
                    <TouchableOpacity >
                        <Text style={{color:"white",fontSize:10,fontWeight:"bold"}}>Get help logging in.</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{paddingTop:20,paddingLeft:150}}>
                    <Text style={{color:"gainsboro"}}>OR</Text>
            </View>
            <View style={{flexDirection:"row"}}>
                <View style={{paddingTop:10,paddingLeft:85}}>
                    <MaterialIcons name="facebook" size={24} color="#4169e1" />
                </View>
                <TouchableOpacity>
                    <View style={{paddingTop:12,paddingLeft:5}}>
                        <Text style={{color:"#4169e1"}}>Log In with Facebook</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

        <View style={{flexDirection:"row",bottom:0,paddingLeft:80,height:40,borderTopWidth:1,width:"100%",borderTopColor:"#778899",paddingTop:8}}>
            <Text style={{color:"gainsboro",fontSize:10}}>Don't have an account?</Text>
            <TouchableOpacity>
                <Text style={{color:"white",fontSize:10,fontWeight:"bold"}}>Sign up</Text>
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

export default Page5