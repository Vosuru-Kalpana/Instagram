import { View, Text, Image } from 'react-native'
import React, {useState} from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Banner from '/home/kalpana/Downloads/SABBCORPIPS-Phase2/assets/myimage.png'
import Feather from 'react-native-vector-icons/Feather'

const Page3 = () => {



  return (
    <View style={{flex:1,backgroundColor:"black",paddingTop:20}}>
        
        <View style={{alignItems:"center",justifyContent:"center"}}>
            <Text style={{color:"white", fontSize:30}}>Instagram</Text>
        </View>

        <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:5}}>
            <View style={{flexDirection:"row",justifyContent:"center",paddingTop:20}}>
                <Image 
                    source={Banner}
                    style={{width:40,height:40,borderRadius:250,marginLeft:20,paddingTop:40,}}
                />
                <View style={{justifyContent:"center"}}>
                    <Text style={{color:"white",marginLeft:10,fontSize:12}}>KalpanaVosuru49</Text>
                    <Text style={{color:"white",marginLeft:10,fontSize:10}}>KalpanaVosuru49</Text>
                </View>
            </View>
            <View style={{flexDirection:"row",alignItems:"center",paddingTop:20}}>
                <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:5,alignItems:"center",justifyContent:"center",width:85,height:22}}>
                    <Text style={{color:"white", fontSize:12}}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name="more-vertical" size={18} color="white"  />
                </TouchableOpacity>
                            
            </View>
        </View>

        <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:5}}>
            <View style={{flexDirection:"row",justifyContent:"center"}}>
                <Image 
                    source={Banner}
                    style={{width:40,height:40,borderRadius:250,marginLeft:20,paddingTop:40,}}
                />
                <View style={{justifyContent:"center"}}>
                    <Text style={{color:"white",marginLeft:10,fontSize:12}}>PavanKalyan64</Text>
                    <Text style={{color:"white",marginLeft:10,fontSize:10}}>pavankalyan_6</Text>
                </View>
            </View>
            <View style={{flexDirection:"row",alignItems:"center"}}>
                <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:5,alignItems:"center",justifyContent:"center",width:85,height:22}}>
                    <Text style={{color:"white", fontSize:12}}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name="more-vertical" size={18} color="white"  />
                </TouchableOpacity>
                            
            </View>
        </View>
       
           
            <View style={{flexDirection:"row",position:"absolute",bottom:0,justifyContent:"space-between",borderWidth:1,borderColor:"white",width:320,height:30}}>
                <View>
                    <TouchableOpacity>
                        <Text style={{color:"white",fontSize:15,alignItems:"center",justifyContent:"center", paddingLeft:30,paddingTop:5,color:"#4169e1"}}>Switch Accounts</Text>
                    </TouchableOpacity>
                </View>
            
                <View>
                    <TouchableOpacity>
                        <Text style={{color:"white",fontSize:15,alignItems:"center",justifyContent:"center",paddingTop:5,paddingRight:50,color:"#4169e1"}}> Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </View>
            
        

    </View>
  )
}

export default Page3