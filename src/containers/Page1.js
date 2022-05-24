import { View, Text, Image, ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import Banner from './assets/myimage.JPG'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialcommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const Page1 = () => {
  return (
    <View style={{flex:1}}>
      <ScrollView contentContainerStyle={{paddingBottom:40}}>
      <View style = {{height:230,backgroundColor:"gainsboro",borderBottomLeftRadius:20, borderBottomRightRadius:20, alignItems:"center",paddingVertical:30}}>
          <Image 
            source={Banner}
            style={{width:80,height:80,borderRadius:20}}
          />

          <Text style={{fontWeight:"bold",color:"black"}}>Pavan Kalpana</Text>
        
        <View style={{flexDirection:"row",paddingVertical:30}}>
          
          <View>
            <Text style={{marginRight:100,color:"red",fontWeight:"bold",paddingLeft:15}}>1M</Text>
            <Text style={{color:"black"}}>Followers</Text>
          </View>
          
          <View>
            <Text style={{marginRight:50,color:"red",fontWeight:"bold",paddingLeft:20}}>20</Text>
            <Text style={{color:"black"}}>Following</Text>
          </View>
        </View>
      </View>
      
      <View>
        <TouchableOpacity style={{backgroundColor:"gainsboro",alignItems:"center",paddingHorizontal:20,paddingVertical:10,justifyContent:"space-between",flexDirection:"row",marginTop:10,borderRadius:10, marginHorizontal:10}}>
          
            <Text style={{fontWeight:"bold"}}>Theme</Text>
            <Foundation name="background-color" size={24} color="black" />
          
        </TouchableOpacity>
        
        <TouchableOpacity style={{backgroundColor:"gainsboro",alignItems:"center",justifyContent:"space-between",paddingHorizontal:20,paddingVertical:10,flexDirection:"row",marginTop:10,borderRadius:10, marginHorizontal:10}}>
            
            <Text style={{fontWeight:"bold"}}>Settings</Text>
            <Feather name="settings" size={24} color="black" />
  
          
        </TouchableOpacity>
        
        <TouchableOpacity style={{backgroundColor:"gainsboro",alignItems:"center",paddingHorizontal:20,paddingVertical:10,justifyContent:"space-between",flexDirection:"row",marginTop:10,borderRadius:10, marginHorizontal:10}}>
          
            <Text style={{fontWeight:"bold"}}>Add Bank</Text>
            <Ionicons name="add" size={24} color="black" />
          
        </TouchableOpacity>
        
        <TouchableOpacity style={{backgroundColor:"gainsboro",alignItems:"center",paddingHorizontal:20,paddingVertical:10,justifyContent:"space-between",flexDirection:"row",marginTop:10,borderRadius:10, marginHorizontal:10}}>
          
            <Text style={{fontWeight:"bold"}}>Bill Pay</Text>
            <MaterialIcons name="payment" size={24} color="black" />
          
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:"gainsboro",alignItems:"center",paddingHorizontal:20,paddingVertical:10,justifyContent:"space-between",flexDirection:"row",marginTop:10,borderRadius:10, marginHorizontal:10}}>
          
            <Text style={{fontWeight:"bold"}}> Transactions</Text>
            <MaterialcommunityIcons name="bank-transfer" size={24} color="black" />
          
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:"gainsboro",alignItems:"center",paddingHorizontal:20,paddingVertical:10,justifyContent:"space-between",flexDirection:"row",marginTop:10,borderRadius:10, marginHorizontal:10}}>
          
            <Text style={{fontWeight:"bold"}}> Help</Text>
            <Feather name="help-circle" size={24} color="black" />
          
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:"gainsboro",alignItems:"center",paddingHorizontal:20,paddingVertical:10,justifyContent:"space-between",flexDirection:"row",marginTop:10,borderRadius:10, marginHorizontal:10}}>
          
            <Text style={{fontWeight:"bold"}}> Contact Us</Text>
            <MaterialIcons name="contact-mail" size={24} color="black" />
          
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:"row",marginHorizontal:20,paddingVertical:20,alignItems:"center"}}>
          <Entypo name="log-out" size={24} color="black"/>
          <Text style={{marginLeft:10,fontWeight:"bold",color:"grey"}}>Sign Out</Text>
        </TouchableOpacity>
        
        
        </View>
        </ScrollView>
    </View>
    
  )
}

export default Page1