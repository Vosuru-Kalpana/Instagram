import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'

import Banner from '../../assets/myimage.jpeg'
import Feather from 'react-native-vector-icons/Feather'
import { hp, wp } from '../common/Dimension'

const SwitchAccount = () => {



  return (
    <View style={{flex:1,backgroundColor:"black",paddingTop:hp(5)}}>
        
        <View style={{alignItems:"center",justifyContent:"center"}}>
            <Text style={{color:"white", fontSize:wp(8)}}>Instagram</Text>
        </View>

        <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:hp(1)}}>
            <View style={{flexDirection:"row",justifyContent:"center",paddingTop:hp(1)}}>
                <Image 
                    source={Banner}
                    style={{width:wp(10),height:hp(5),borderRadius:wp(100),marginLeft:wp(8),paddingTop:hp(5)}}
                />
                <View style={{justifyContent:"center"}}>
                    <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(3)}}>KalpanaVosuru49</Text>
                    <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(2.5)}}>KalpanaVosuru49</Text>
                </View>
            </View>
            <View style={{flexDirection:"row",alignItems:"center",paddingTop:hp(1),marginRight:wp(8)}}>
                <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:wp(2),alignItems:"center",justifyContent:"center",width:wp(25),height:hp(3)}}>
                    <Text style={{color:"white", fontSize:wp(3)}}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name="more-vertical" size={18} color="white"  />
                </TouchableOpacity>
                            
            </View>
        </View>

        <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:hp(1)}}>
            <View style={{flexDirection:"row",justifyContent:"center",paddingTop:hp(1)}}>
                <Image 
                    source={Banner}
                    style={{width:wp(10),height:hp(5),borderRadius:wp(100),marginLeft:wp(8),paddingTop:hp(5)}}
                />
                <View style={{justifyContent:"center"}}>
                    <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(3)}}>PavanKalpana64</Text>
                    <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(2.5)}}>pavankalyan_6</Text>
                </View>
            </View>
            <View style={{flexDirection:"row",alignItems:"center",paddingTop:hp(1),marginRight:wp(8)}}>
                <TouchableOpacity style={{borderWidth:1,borderColor:"white",borderRadius:wp(2),alignItems:"center",justifyContent:"center",width:wp(25),height:hp(3)}}>
                    <Text style={{color:"white", fontSize:wp(3)}}>Log In</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Feather name="more-vertical" size={18} color="white"  />
                </TouchableOpacity>
                            
            </View>
        </View>
       
           
            <View style={{flexDirection:"row",position:"absolute",bottom:0,justifyContent:"space-between",borderRadius:wp(1),borderWidth:1,borderColor:"white",width:wp(100),height:hp(5)}}>
                <View>
                    <TouchableOpacity>
                        <Text style={{color:"white",fontSize:wp(4),alignItems:"center",justifyContent:"center", paddingLeft:wp(12),paddingTop:hp(1),color:"#4169e1"}}>Switch Accounts</Text>
                    </TouchableOpacity>
                </View>
            
                <View>
                    <TouchableOpacity>
                        <Text style={{color:"white",fontSize:wp(4),alignItems:"center",justifyContent:"center",paddingTop:hp(1),paddingRight:wp(15),color:"#4169e1"}}> Sign Up</Text>
                    </TouchableOpacity>
                </View>

            </View>
            
        

    </View>
  )
}

export default SwitchAccount