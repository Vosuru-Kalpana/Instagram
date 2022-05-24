import { View, Text,TextInput, TouchableOpacity, StatusBar } from 'react-native'
import React, {useState} from 'react'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const Page6 = () => {

        const [boolean, setBoolean] = useState(true)
        const [phonenumber, setPhonenumber] = useState("")

        const PHONE = () => {
            setBoolean(false)
        }
        const EMAIL = () => {
            setBoolean(true)
        }
        const onPhonenumber = (val) => {
              setPhonenumber(val)
              console.log("phonenumber",phonenumber)
        }



  return (
    <View style={{flex:1,backgroundColor:"black",flexDirection:"column",justifyContent:"space-between"}}>
        <StatusBar backgroundColor={"black"}/>
        <View>
            <View style={{marginTop:80, marginLeft:80}}>
                <EvilIcons name="user" size={170} color="white" />
            </View>
            <View style={{marginTop:5,paddingLeft:20,paddingRight:20}}>
                <View>
                    <View>
                        <View style={{flexDirection:"row",justifyContent:"space-between",borderBottomWidth:1,height:50,borderBottomColor:"white"}}>
                            <TouchableOpacity onPress={() => PHONE()}>
                                <Text style={{color:"white",paddingLeft:60,padding:20}}>PHONE</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => EMAIL()}>
                                <Text style={{color:"white",paddingRight:60,padding:20}}>EMAIL</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View>
                    { boolean ?
                    <View>
                        <View style={{paddingTop:10}}>
                            <TextInput
                                style={{color:"gainsboro",fontSize:12,paddingLeft:10,paddingTop:12,alignItems:"center",justifyContent:"center",height:40,borderWidth:1, backgroundColor:"grey"}}
                                placeholder="Phone Number"
                                placeholderTextColor="lemonchiffon"
                                secureTextEntry={false}
                                keyboardType='numeric'
                                value={phonenumber}
                                onChangeText={(val) => onPhonenumber(val)}

                            />
                        </View>
                        <View>
                            <Text style={{color:"lemonchiffon",fontSize:11,paddingLeft:5,paddingRight:5,paddingTop:10}}>
                                You may receive SMS notifications from us for security and login purposes.
                            </Text>
                        </View>
                        <View style={{paddingTop:10}}>
                            <TouchableOpacity style={{color:"gainsboro",fontSize:12,paddingLeft:10,paddingTop:10,alignItems:"center",justifyContent:"center",height:40,borderWidth:1, backgroundColor:"#4169e1"}}>
                                <Text style={{color:"white",paddingLeft:20,padding:20,alignItems:"center",justifyContent:"center",marginBottom:10}}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    :
                    <View>
                        <View style={{paddingTop:10}}>
                            <TextInput
                                    style={{color:"gainsboro",fontSize:12,paddingLeft:10,paddingTop:12,alignItems:"center",justifyContent:"center",height:40,borderWidth:1, backgroundColor:"grey"}}
                                    placeholder="Email"
                                    placeholderTextColor="lemonchiffon"
                                    secureTextEntry={true}
                                    keyboardType='numeric'
                                    onChange={text}
                                />
                        </View>
                        <View style={{paddingTop:10}}>
                            <TouchableOpacity style={{color:"gainsboro",fontSize:12,paddingLeft:10,paddingTop:10,alignItems:"center",justifyContent:"center",height:40,borderWidth:1, backgroundColor:"#4169e1"}}>
                                <Text style={{color:"white",paddingLeft:20,padding:20,alignItems:"center",justifyContent:"center",marginBottom:10}}>Next</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    }
                </View>
                
            </View>
        </View>

        
        <View style={{flexDirection:"row",bottom:0,paddingLeft:80,height:40,borderTopWidth:1,width:"100%",borderTopColor:"#778899",paddingTop:8}}>
            <Text style={{color:"gainsboro",fontSize:10}}>Already have an account?</Text>
            <TouchableOpacity>
                <Text style={{color:"white",fontSize:10,fontWeight:"bold"}}>Log In</Text>
            </TouchableOpacity>
        </View>

        
        
    </View>
  )
}

export default Page6