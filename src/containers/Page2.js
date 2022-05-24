import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import IonIcons from 'react-native-vector-icons/Ionicons'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import Banner from '/home/kalpana/Downloads/SABBCORPIPS-Phase2/assets/myimage.png'
import Feather from 'react-native-vector-icons/Feather'
import Page3 from './Page3'

const Page2 = () => {

    const [boolean, setBoolean] = useState(false)

    const onFollowing = () => {
        setBoolean(true)
    }
    const onFollowers = () => {
        setBoolean(false)
    }




  return (
      
    <View style={{flex:1,backgroundColor:"black",paddingTop:20}}> 
        <ScrollView>
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity>
                    <IonIcons name="arrow-back" size={24} color="white"/>
                </TouchableOpacity>
                
                <Text style={{marginLeft:10,color:"white",fontWeight:"bold",fontSize:18}}>Pavan_Kalpana</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-between",borderBottomWidth:1,borderBottomColor:"white"}}>
                <TouchableOpacity onPress={() => onFollowers()}>
                    <Text style={{color:"white",paddingLeft:40,padding:15}}>52 followers</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> onFollowing()}>
                    <Text style={{color:"white",paddingRight:40,padding:15}}>40 following</Text>
                </TouchableOpacity>
            </View>
            <View>
            {
                
                boolean ? 
                <View>
                    <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:5}}>
                        <View style={{flexDirection:"row",justifyContent:"center"}}>
                            <Image 
                                source={Banner}
                                style={{width:40,height:40,borderRadius:250,marginLeft:20,paddingTop:40,}}
                            />
                            <View style={{justifyContent:"center"}}>
                                <Text style={{color:"white",marginLeft:10,fontSize:12}}>KalpanaVosuru49</Text>
                                <Text style={{color:"white",marginLeft:10,fontSize:10}}>KalpanaVosuru49</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:5,alignItems:"center",justifyContent:"center",width:110,height:22}}>
                                <Text style={{color:"white", fontSize:12}}>Following</Text>
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
                            <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:5,alignItems:"center",justifyContent:"center",width:110,height:22}}>
                                <Text style={{color:"white", fontSize:12}}>Following</Text>
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
                                <Text style={{color:"white",marginLeft:10,fontSize:12}}>DeepakRoyal26</Text>
                                <Text style={{color:"white",marginLeft:10,fontSize:10}}>deepak_royal</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:5,alignItems:"center",justifyContent:"center",width:110,height:22}}>
                                <Text style={{color:"white", fontSize:12}}>Following</Text>
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
                                <Text style={{color:"white",marginLeft:10,fontSize:12}}>Chalapathibabu</Text>
                                <Text style={{color:"white",marginLeft:10,fontSize:10}}>chalapathivosuru</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:5,alignItems:"center",justifyContent:"center",width:110,height:22}}>
                                <Text style={{color:"white", fontSize:12}}>Following</Text>
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
                                <Text style={{color:"white",marginLeft:10,fontSize:12}}>Nirmalavosuru</Text>
                                <Text style={{color:"white",marginLeft:10,fontSize:10}}>nirmalababu</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:5,alignItems:"center",justifyContent:"center",width:110,height:22}}>
                                <Text style={{color:"white", fontSize:12}}>Following</Text>
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
                                <Text style={{color:"white",marginLeft:10,fontSize:12}}>NikhilKaranam</Text>
                                <Text style={{color:"white",marginLeft:10,fontSize:10}}>nikhilclayfin</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:5,alignItems:"center",justifyContent:"center",width:110,height:22}}>
                                <Text style={{color:"white", fontSize:12}}>Following</Text>
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
                                <Text style={{color:"white",marginLeft:10,fontSize:12}}>OOharish</Text>
                                <Text style={{color:"white",marginLeft:10,fontSize:10}}>ooha_harish</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:5,alignItems:"center",justifyContent:"center",width:110,height:22}}>
                                <Text style={{color:"white", fontSize:12}}>Following</Text>
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
                                <Text style={{color:"white",marginLeft:10,fontSize:12}}>PavanKalpana64</Text>
                                <Text style={{color:"white",marginLeft:10,fontSize:10}}>pavankalpana</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:5,alignItems:"center",justifyContent:"center",width:110,height:22}}>
                                <Text style={{color:"white", fontSize:12}}>Following</Text>
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
                                <Text style={{color:"white",marginLeft:10,fontSize:12}}>MounikaG</Text>
                                <Text style={{color:"white",marginLeft:10,fontSize:10}}>Mouni_leom_</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:5,alignItems:"center",justifyContent:"center",width:110,height:22}}>
                                <Text style={{color:"white", fontSize:12}}>Following</Text>
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
                                <Text style={{color:"white",marginLeft:10,fontSize:12}}>BinduSai69</Text>
                                <Text style={{color:"white",marginLeft:10,fontSize:10}}>bindugattamaneni</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:5,alignItems:"center",justifyContent:"center",width:110,height:22}}>
                                <Text style={{color:"white", fontSize:12}}>Following</Text>
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
                                <Text style={{color:"white",marginLeft:10,fontSize:12}}>NandiniGangarapu</Text>
                                <Text style={{color:"white",marginLeft:10,fontSize:10}}>nandu_papa_</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:5,alignItems:"center",justifyContent:"center",width:110,height:22}}>
                                <Text style={{color:"white", fontSize:12}}>Following</Text>
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
                                <Text style={{color:"white",marginLeft:10,fontSize:12}}>NithyaNandini</Text>
                                <Text style={{color:"white",marginLeft:10,fontSize:10}}>nithyanandini</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:5,alignItems:"center",justifyContent:"center",width:110,height:22}}>
                                <Text style={{color:"white", fontSize:12}}>Following</Text>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Feather name="more-vertical" size={18} color="white"  />
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                    
                    
                </View>
                
                
                : 
            
            
            <View>
                <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:5}}>
                    <View style={{flexDirection:"row",justifyContent:"center"}}>
                        <Image 
                            source={Banner}
                            style={{width:40,height:40,borderRadius:250,marginLeft:20,paddingTop:40,}}
                        />
                        <View style={{justifyContent:"center"}}>
                            <Text style={{color:"white",marginLeft:10,fontSize:12}}>KalpanaVosuru49</Text>
                            <Text style={{color:"white",marginLeft:10,fontSize:8}}>KalpanaVosuru49</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:5,alignItems:"center",justifyContent:"center",width:110,height:22}}>
                            <Text style={{color:"white", fontSize:12}}>Follow</Text>
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
                            <Text style={{color:"white",marginLeft:10,fontSize:8}}>pavankalyan_6</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:5,alignItems:"center",justifyContent:"center",width:110,height:22}}>
                            <Text style={{color:"white", fontSize:12}}>Follow</Text>
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
                            <Text style={{color:"white",marginLeft:10,fontSize:12}}>DeepakRoyal26</Text>
                            <Text style={{color:"white",marginLeft:10,fontSize:8}}>deepak_royal</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:5,alignItems:"center",justifyContent:"center",width:110,height:22}}>
                            <Text style={{color:"white", fontSize:12}}>Follow</Text>
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
                            <Text style={{color:"white",marginLeft:10,fontSize:12}}>ChalapathiBabu</Text>
                            <Text style={{color:"white",marginLeft:10,fontSize:8}}>chalapathivosuru</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:5,alignItems:"center",justifyContent:"center",width:110,height:22}}>
                            <Text style={{color:"white", fontSize:12}}>Follow</Text>
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
                            <Text style={{color:"white",marginLeft:10,fontSize:12}}>Nirmalavosuru</Text>
                            <Text style={{color:"white",marginLeft:10,fontSize:8}}>nirmalababu</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:5,alignItems:"center",justifyContent:"center",width:110,height:22}}>
                            <Text style={{color:"white", fontSize:12}}>Follow</Text>
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
                            <Text style={{color:"white",marginLeft:10,fontSize:12}}>NikhilKaranam</Text>
                            <Text style={{color:"white",marginLeft:10,fontSize:8}}>nikhilclayfin</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:5,alignItems:"center",justifyContent:"center",width:110,height:22}}>
                            <Text style={{color:"white", fontSize:12}}>Follow</Text>
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
                            <Text style={{color:"white",marginLeft:10,fontSize:12}}>OOharish</Text>
                            <Text style={{color:"white",marginLeft:10,fontSize:8}}>ooha_harish</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:5,alignItems:"center",justifyContent:"center",width:110,height:22}}>
                            <Text style={{color:"white", fontSize:12}}>Follow</Text>
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
                            <Text style={{color:"white",marginLeft:10,fontSize:12}}>PavanKalpana64</Text>
                            <Text style={{color:"white",marginLeft:10,fontSize:8}}>pavankalpana</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:5,alignItems:"center",justifyContent:"center",width:110,height:22}}>
                            <Text style={{color:"white", fontSize:12}}>Follow</Text>
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
                            <Text style={{color:"white",marginLeft:10,fontSize:12}}>MounikaG</Text>
                            <Text style={{color:"white",marginLeft:10,fontSize:8}}>Mouni_leom_</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:5,alignItems:"center",justifyContent:"center",width:110,height:22}}>
                            <Text style={{color:"white", fontSize:12}}>Follow</Text>
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
                            <Text style={{color:"white",marginLeft:10,fontSize:12}}>BinduSai69</Text>
                            <Text style={{color:"white",marginLeft:10,fontSize:8}}>bindugattamaneni</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:5,alignItems:"center",justifyContent:"center",width:110,height:22}}>
                            <Text style={{color:"white", fontSize:12}}>Follow</Text>
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
                            <Text style={{color:"white",marginLeft:10,fontSize:12}}>NandiniGangarapu</Text>
                            <Text style={{color:"white",marginLeft:10,fontSize:8}}>nandu_papa_</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:5,alignItems:"center",justifyContent:"center",width:110,height:22}}>
                            <Text style={{color:"white", fontSize:12}}>Follow</Text>
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
                            <Text style={{color:"white",marginLeft:10,fontSize:12}}>NithyaNandini</Text>
                            <Text style={{color:"white",marginLeft:10,fontSize:8}}>nithyanandini</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center"}}>
                        <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:5,alignItems:"center",justifyContent:"center",width:110,height:22}}>
                            <Text style={{color:"white", fontSize:12}}>Follow</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Feather name="more-vertical" size={18} color="white"  />
                        </TouchableOpacity>

                    </View>
                </View>


            </View>

            }
                    
            </View>
        </ScrollView>
    </View>
  )
}

export default Page2