import { View, Text, Image, ScrollView,TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import Banner from '../../assets/myimage.jpeg'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialcommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { hp, wp } from '../common/Dimension'



const Profilepage = () => {
  
  return (
    <View style={{flex:1}}>
      <ScrollView contentContainerStyle={{paddingBottom:hp(5)}}>
      <View style = {{height:hp(35),backgroundColor:"gainsboro",borderBottomLeftRadius:wp(5), borderBottomRightRadius:wp(5), alignItems:"center",paddingVertical:hp(5)}}>
          <Image 
            source={Banner}
            style={{width:wp(20),height:hp(12),borderRadius:wp(30)}}
          />

          <Text style={{fontWeight:"bold",color:"black"}}>Pavan Kalpana</Text>
        
        <View style={{flexDirection:"row",paddingVertical:hp(5)}}>
          
          <View>
            <Text style={{marginRight:wp(30),color:"red",fontWeight:"bold",paddingLeft:wp(3)}}>1M</Text>
            <Text style={{color:"black"}}>Followers</Text>
          </View>
          
          <View>
            <Text style={{marginRight:wp(10),color:"red",fontWeight:"bold",paddingLeft:wp(5)}}>20</Text>
            <Text style={{color:"black"}}>Following</Text>
          </View>
        </View>
      </View>
      
      <View>
        <TouchableOpacity style={{backgroundColor:"gainsboro",alignItems:"center",paddingHorizontal:wp(5),paddingVertical:hp(2),justifyContent:"space-between",flexDirection:"row",marginTop:hp(2),borderRadius:wp(3), marginHorizontal:wp(2)}}>
          
            <Text style={{fontWeight:"bold"}}>Theme</Text>
            <Foundation name="background-color" size={24} color="black" />
          
        </TouchableOpacity>
        
        <TouchableOpacity style={{backgroundColor:"gainsboro",alignItems:"center",paddingHorizontal:wp(5),paddingVertical:hp(2),justifyContent:"space-between",flexDirection:"row",marginTop:hp(2),borderRadius:wp(3), marginHorizontal:wp(2)}}>
            
            <Text style={{fontWeight:"bold"}}>Settings</Text>
            <Feather name="settings" size={24} color="black" />
  
          
        </TouchableOpacity>
        
        <TouchableOpacity style={{backgroundColor:"gainsboro",alignItems:"center",paddingHorizontal:wp(5),paddingVertical:hp(2),justifyContent:"space-between",flexDirection:"row",marginTop:hp(2),borderRadius:wp(3), marginHorizontal:wp(2)}}>
          
            <Text style={{fontWeight:"bold"}}>Add Bank</Text>
            <Ionicons name="add" size={24} color="black" />
          
        </TouchableOpacity>
        
        <TouchableOpacity style={{backgroundColor:"gainsboro",alignItems:"center",paddingHorizontal:wp(5),paddingVertical:hp(2),justifyContent:"space-between",flexDirection:"row",marginTop:hp(2),borderRadius:wp(3), marginHorizontal:wp(2)}}>
          
            <Text style={{fontWeight:"bold"}}>Bill Pay</Text>
            <MaterialIcons name="payment" size={24} color="black" />
          
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:"gainsboro",alignItems:"center",paddingHorizontal:wp(5),paddingVertical:hp(2),justifyContent:"space-between",flexDirection:"row",marginTop:hp(2),borderRadius:wp(3), marginHorizontal:wp(2)}}>
          
            <Text style={{fontWeight:"bold"}}> Transactions</Text>
            <MaterialcommunityIcons name="bank-transfer" size={24} color="black" />
          
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:"gainsboro",alignItems:"center",paddingHorizontal:wp(5),paddingVertical:hp(2),justifyContent:"space-between",flexDirection:"row",marginTop:hp(2),borderRadius:wp(3), marginHorizontal:wp(2)}}>
          
            <Text style={{fontWeight:"bold"}}> Help</Text>
            <Feather name="help-circle" size={24} color="black" />
          
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:"gainsboro",alignItems:"center",paddingHorizontal:wp(5),paddingVertical:hp(2),justifyContent:"space-between",flexDirection:"row",marginTop:hp(2),borderRadius:wp(3), marginHorizontal:wp(2)}}>
          
            <Text style={{fontWeight:"bold"}}> Contact Us</Text>
            <MaterialIcons name="contact-mail" size={24} color="black" />
          
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:"row",marginHorizontal:wp(5),paddingVertical:hp(3),alignItems:"center"}}>
          <Entypo name="log-out" size={24} color="grey"/>
          <Text style={{marginLeft:wp(2),fontWeight:"bold",color:"grey"}}>Sign Out</Text>
        </TouchableOpacity>
        
        
        </View>
        </ScrollView>
    </View>
    
  )
}

export default Profilepage