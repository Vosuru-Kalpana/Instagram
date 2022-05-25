import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import IonIcons from 'react-native-vector-icons/Ionicons'
import Banner from '../../assets/myimage.jpeg'
import Feather from 'react-native-vector-icons/Feather'
// import Page3 from './Page3'
import { hp, wp } from '../common/Dimension'

const Followpage = () => {

    const [boolean, setBoolean] = useState(false)

    const onFollowing = () => {
        setBoolean(true)
    }
    const onFollowers = () => {
        setBoolean(false)
    }




  return (
      
    <View style={{flex:1,backgroundColor:"black",paddingTop:hp(3)}}> 
        <ScrollView>
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity>
                    <IonIcons name="arrow-back" size={24} color="white"/>
                </TouchableOpacity>
                
                <Text style={{marginLeft:wp(5),color:"white",fontWeight:"bold",fontSize:wp(5)}}>Pavan_Kalpana</Text>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-between",borderBottomWidth:1,borderBottomColor:"white"}}>
                <TouchableOpacity onPress={() => onFollowers()}>
                    <Text style={{color:"white",paddingLeft:wp(20),padding:wp(3)}}>52 followers</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=> onFollowing()}>
                    <Text style={{color:"white",paddingRight:wp(20),padding:wp(3)}}>40 following</Text>
                </TouchableOpacity>
            </View>
            <View>
            {
                
                boolean ? 
                <View>
                    <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:hp(1)}}>
                        <View style={{flexDirection:"row",justifyContent:"center"}}>
                            <Image 
                                source={Banner}
                                style={{width:wp(10),height:hp(6),borderRadius:wp(100),marginLeft:wp(7),paddingTop:hp(5)}}
                            />
                            <View style={{justifyContent:"center"}}>
                                <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(3)}}>KalpanaVosuru49</Text>
                                <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(2.5)}}>KalpanaVosuru49</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:wp(2),alignItems:"center",justifyContent:"center",width:wp(30),height:hp(4)}}>
                                <Text style={{color:"white", fontSize:wp(3)}}>Following</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingRight:wp(5)}}>
                                <Feather name="more-vertical" size={18} color="white"  />
                            </TouchableOpacity>
                            
                        </View>
                    </View>

                    <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:hp(1)}}>
                        <View style={{flexDirection:"row",justifyContent:"center"}}>
                            <Image 
                                source={Banner}
                                style={{width:wp(10),height:hp(6),borderRadius:wp(100),marginLeft:wp(7),paddingTop:hp(5)}}
                            />
                            <View style={{justifyContent:"center"}}>
                                <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(3)}}>PavanKalyan64</Text>
                                <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(2.5)}}>pavankalyan_6</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:wp(2),alignItems:"center",justifyContent:"center",width:wp(30),height:hp(4)}}>
                                <Text style={{color:"white", fontSize:wp(3)}}>Following</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingRight:wp(5)}}>
                                <Feather name="more-vertical" size={18} color="white"  />
                            </TouchableOpacity>
                            
                        </View>
                    </View>

                    <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:hp(1)}}>
                        <View style={{flexDirection:"row",justifyContent:"center"}}>
                            <Image 
                                source={Banner}
                                style={{width:wp(10),height:hp(6),borderRadius:wp(100),marginLeft:wp(7),paddingTop:hp(5)}}
                            />
                            <View style={{justifyContent:"center"}}>
                                <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(3)}}>DeepakRoyal26</Text>
                                <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(2.5)}}>deepak_royal</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:wp(2),alignItems:"center",justifyContent:"center",width:wp(30),height:hp(4)}}>
                                <Text style={{color:"white", fontSize:wp(3)}}>Following</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingRight:wp(5)}}>
                                <Feather name="more-vertical" size={18} color="white"  />
                            </TouchableOpacity>
                            
                        </View>
                    </View>

                    <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:hp(1)}}>
                        <View style={{flexDirection:"row",justifyContent:"center"}}>
                            <Image 
                                source={Banner}
                                style={{width:wp(10),height:hp(6),borderRadius:wp(100),marginLeft:wp(7),paddingTop:hp(5)}}
                            />
                            <View style={{justifyContent:"center"}}>
                                <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(3)}}>ChalapathiBabu</Text>
                                <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(2.5)}}>chalapathivosuru</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:wp(2),alignItems:"center",justifyContent:"center",width:wp(30),height:hp(4)}}>
                                <Text style={{color:"white", fontSize:wp(3)}}>Following</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingRight:wp(5)}}>
                                <Feather name="more-vertical" size={18} color="white"  />
                            </TouchableOpacity>
                            
                        </View>
                    </View>

                    <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:hp(1)}}>
                        <View style={{flexDirection:"row",justifyContent:"center"}}>
                            <Image 
                                source={Banner}
                                style={{width:wp(10),height:hp(6),borderRadius:wp(100),marginLeft:wp(7),paddingTop:hp(5)}}
                            />
                            <View style={{justifyContent:"center"}}>
                                <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(3)}}>Nirmalavosuru</Text>
                                <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(2.5)}}>nirmalababu</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:wp(2),alignItems:"center",justifyContent:"center",width:wp(30),height:hp(4)}}>
                                <Text style={{color:"white", fontSize:wp(3)}}>Following</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingRight:wp(5)}}>
                                <Feather name="more-vertical" size={18} color="white"  />
                            </TouchableOpacity>
                            
                        </View>
                    </View>

                    <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:hp(1)}}>
                        <View style={{flexDirection:"row",justifyContent:"center"}}>
                            <Image 
                                source={Banner}
                                style={{width:wp(10),height:hp(6),borderRadius:wp(100),marginLeft:wp(7),paddingTop:hp(5)}}
                            />
                            <View style={{justifyContent:"center"}}>
                                <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(3)}}>NikhilKaranam</Text>
                                <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(2.5)}}>nikhilclayfin</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:wp(2),alignItems:"center",justifyContent:"center",width:wp(30),height:hp(4)}}>
                                <Text style={{color:"white", fontSize:wp(3)}}>Following</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingRight:wp(5)}}>
                                <Feather name="more-vertical" size={18} color="white"  />
                            </TouchableOpacity>
                            
                        </View>
                    </View>

                    <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:hp(1)}}>
                        <View style={{flexDirection:"row",justifyContent:"center"}}>
                            <Image 
                                source={Banner}
                                style={{width:wp(10),height:hp(6),borderRadius:wp(100),marginLeft:wp(7),paddingTop:hp(5)}}
                            />
                            <View style={{justifyContent:"center"}}>
                                <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(3)}}>OOharish</Text>
                                <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(2.5)}}>ooha_harish</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:wp(2),alignItems:"center",justifyContent:"center",width:wp(30),height:hp(4)}}>
                                <Text style={{color:"white", fontSize:wp(3)}}>Following</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingRight:wp(5)}}>
                                <Feather name="more-vertical" size={18} color="white"  />
                            </TouchableOpacity>
                            
                        </View>
                    </View>

                    <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:hp(1)}}>
                        <View style={{flexDirection:"row",justifyContent:"center"}}>
                            <Image 
                                source={Banner}
                                style={{width:wp(10),height:hp(6),borderRadius:wp(100),marginLeft:wp(7),paddingTop:hp(5)}}
                            />
                            <View style={{justifyContent:"center"}}>
                                <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(3)}}>PavanKalpana64</Text>
                                <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(2.5)}}>Pavan_Kalpana</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:wp(2),alignItems:"center",justifyContent:"center",width:wp(30),height:hp(4)}}>
                                <Text style={{color:"white", fontSize:wp(3)}}>Following</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingRight:wp(5)}}>
                                <Feather name="more-vertical" size={18} color="white"  />
                            </TouchableOpacity>
                            
                        </View>
                    </View>

                    <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:hp(1)}}>
                        <View style={{flexDirection:"row",justifyContent:"center"}}>
                            <Image 
                                source={Banner}
                                style={{width:wp(10),height:hp(6),borderRadius:wp(100),marginLeft:wp(7),paddingTop:hp(5)}}
                            />
                            <View style={{justifyContent:"center"}}>
                                <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(3)}}>MounikaG</Text>
                                <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(2.5)}}>Mouni_leom_</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:wp(2),alignItems:"center",justifyContent:"center",width:wp(30),height:hp(4)}}>
                                <Text style={{color:"white", fontSize:wp(3)}}>Following</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingRight:wp(5)}}>
                                <Feather name="more-vertical" size={18} color="white"  />
                            </TouchableOpacity>
                            
                        </View>
                    </View>

                    <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:hp(1)}}>
                        <View style={{flexDirection:"row",justifyContent:"center"}}>
                            <Image 
                                source={Banner}
                                style={{width:wp(10),height:hp(6),borderRadius:wp(100),marginLeft:wp(7),paddingTop:hp(5)}}
                            />
                            <View style={{justifyContent:"center"}}>
                                <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(3)}}>BinduSai69</Text>
                                <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(2.5)}}>bindugattamaneni</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:wp(2),alignItems:"center",justifyContent:"center",width:wp(30),height:hp(4)}}>
                                <Text style={{color:"white", fontSize:wp(3)}}>Following</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingRight:wp(5)}}>
                                <Feather name="more-vertical" size={18} color="white"  />
                            </TouchableOpacity>
                            
                        </View>
                    </View>

                    <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:hp(1)}}>
                        <View style={{flexDirection:"row",justifyContent:"center"}}>
                            <Image 
                                source={Banner}
                                style={{width:wp(10),height:hp(6),borderRadius:wp(100),marginLeft:wp(7),paddingTop:hp(5)}}
                            />
                            <View style={{justifyContent:"center"}}>
                                <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(3)}}>NandiniGangarapu</Text>
                                <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(2.5)}}>nandu_papa_</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:wp(2),alignItems:"center",justifyContent:"center",width:wp(30),height:hp(4)}}>
                                <Text style={{color:"white", fontSize:wp(3)}}>Following</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingRight:wp(5)}}>
                                <Feather name="more-vertical" size={18} color="white"  />
                            </TouchableOpacity>
                            
                        </View>
                    </View>

                    <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:hp(1)}}>
                        <View style={{flexDirection:"row",justifyContent:"center"}}>
                            <Image 
                                source={Banner}
                                style={{width:wp(10),height:hp(6),borderRadius:wp(100),marginLeft:wp(7),paddingTop:hp(5)}}
                            />
                            <View style={{justifyContent:"center"}}>
                                <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(3)}}>NithyaNandini</Text>
                                <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(2.5)}}>nithyanandini</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:wp(2),alignItems:"center",justifyContent:"center",width:wp(30),height:hp(4)}}>
                                <Text style={{color:"white", fontSize:wp(3)}}>Following</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{paddingRight:wp(5)}}>
                                <Feather name="more-vertical" size={18} color="white"  />
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                    
                    
                </View>
                
                
                : 
            
            
            <View>
                <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:hp(2),paddingBottom:hp(1)}}>
                    <View style={{flexDirection:"row",justifyContent:"center"}}>
                        <Image 
                            source={Banner}
                            style={{width:wp(10),height:hp(5),borderRadius:wp(100),marginLeft:wp(8),paddingTop:hp(5)}}
                        />
                        <View style={{justifyContent:"center"}}>
                            <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(3)}}>KalpanaVosuru49</Text>
                            <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(2.5)}}>KalpanaVosuru49</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center",paddingRight:wp(10)}}>
                        <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:wp(2),alignItems:"center",justifyContent:"center",width:wp(30),height:hp(4)}}>
                            <Text style={{color:"white", fontSize:wp(3)}}>Remove</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>

                <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:hp(2),paddingBottom:hp(1)}}>
                    <View style={{flexDirection:"row",justifyContent:"center"}}>
                        <Image 
                            source={Banner}
                            style={{width:wp(10),height:hp(5),borderRadius:wp(100),marginLeft:wp(8),paddingTop:hp(5)}}
                        />
                        <View style={{justifyContent:"center"}}>
                            <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(3)}}>PavanKalyan64</Text>
                            <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(2.5)}}>pavankalyan_6</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center",paddingRight:wp(10)}}>
                        <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:wp(2),alignItems:"center",justifyContent:"center",width:wp(30),height:hp(4)}}>
                            <Text style={{color:"white", fontSize:wp(3)}}>Remove</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>

                <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:hp(2),paddingBottom:hp(1)}}>
                    <View style={{flexDirection:"row",justifyContent:"center"}}>
                        <Image 
                            source={Banner}
                            style={{width:wp(10),height:hp(5),borderRadius:wp(100),marginLeft:wp(8),paddingTop:hp(5)}}
                        />
                        <View style={{justifyContent:"center"}}>
                            <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(3)}}>DeepakRoyal26</Text>
                            <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(2.5)}}>deepak_royal</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center",paddingRight:wp(10)}}>
                        <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:wp(2),alignItems:"center",justifyContent:"center",width:wp(30),height:hp(4)}}>
                            <Text style={{color:"white", fontSize:wp(3)}}>Remove</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>

                <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:hp(2),paddingBottom:hp(1)}}>
                    <View style={{flexDirection:"row",justifyContent:"center"}}>
                        <Image 
                            source={Banner}
                            style={{width:wp(10),height:hp(5),borderRadius:wp(100),marginLeft:wp(8),paddingTop:hp(5)}}
                        />
                        <View style={{justifyContent:"center"}}>
                            <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(3)}}>ChalapathiBabu</Text>
                            <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(2.5)}}>chalapathivosuru</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center",paddingRight:wp(10)}}>
                        <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:wp(2),alignItems:"center",justifyContent:"center",width:wp(30),height:hp(4)}}>
                            <Text style={{color:"white", fontSize:wp(3)}}>Remove</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>

                <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:hp(2),paddingBottom:hp(1)}}>
                    <View style={{flexDirection:"row",justifyContent:"center"}}>
                        <Image 
                            source={Banner}
                            style={{width:wp(10),height:hp(5),borderRadius:wp(100),marginLeft:wp(8),paddingTop:hp(5)}}
                        />
                        <View style={{justifyContent:"center"}}>
                            <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(3)}}>Nirmalavosuru</Text>
                            <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(2.5)}}>nirmalababu</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center",paddingRight:wp(10)}}>
                        <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:wp(2),alignItems:"center",justifyContent:"center",width:wp(30),height:hp(4)}}>
                            <Text style={{color:"white", fontSize:wp(3)}}>Remove</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>

                <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:hp(2),paddingBottom:hp(1)}}>
                    <View style={{flexDirection:"row",justifyContent:"center"}}>
                        <Image 
                            source={Banner}
                            style={{width:wp(10),height:hp(5),borderRadius:wp(100),marginLeft:wp(8),paddingTop:hp(5)}}
                        />
                        <View style={{justifyContent:"center"}}>
                            <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(3)}}>NikhilKaranam</Text>
                            <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(2.5)}}>nikhilclayfin</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center",paddingRight:wp(10)}}>
                        <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:wp(2),alignItems:"center",justifyContent:"center",width:wp(30),height:hp(4)}}>
                            <Text style={{color:"white", fontSize:wp(3)}}>Remove</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>

                <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:hp(2),paddingBottom:hp(1)}}>
                    <View style={{flexDirection:"row",justifyContent:"center"}}>
                        <Image 
                            source={Banner}
                            style={{width:wp(10),height:hp(5),borderRadius:wp(100),marginLeft:wp(8),paddingTop:hp(5)}}
                        />
                        <View style={{justifyContent:"center"}}>
                            <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(3)}}>OOharish</Text>
                            <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(2.5)}}>ooha_harish</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center",paddingRight:wp(10)}}>
                        <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:wp(2),alignItems:"center",justifyContent:"center",width:wp(30),height:hp(4)}}>
                            <Text style={{color:"white", fontSize:wp(3)}}>Remove</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>

                <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:hp(2),paddingBottom:hp(1)}}>
                    <View style={{flexDirection:"row",justifyContent:"center"}}>
                        <Image 
                            source={Banner}
                            style={{width:wp(10),height:hp(5),borderRadius:wp(100),marginLeft:wp(8),paddingTop:hp(5)}}
                        />
                        <View style={{justifyContent:"center"}}>
                            <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(3)}}>PavanKalpana64</Text>
                            <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(2.5)}}>Pavan_Kalpana</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center",paddingRight:wp(10)}}>
                        <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:wp(2),alignItems:"center",justifyContent:"center",width:wp(30),height:hp(4)}}>
                            <Text style={{color:"white", fontSize:wp(3)}}>Remove</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>

                <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:hp(2),paddingBottom:hp(1)}}>
                    <View style={{flexDirection:"row",justifyContent:"center"}}>
                        <Image 
                            source={Banner}
                            style={{width:wp(10),height:hp(5),borderRadius:wp(100),marginLeft:wp(8),paddingTop:hp(5)}}
                        />
                        <View style={{justifyContent:"center"}}>
                            <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(3)}}>MounikaG</Text>
                            <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(2.5)}}>Mouni_leom_</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center",paddingRight:wp(10)}}>
                        <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:wp(2),alignItems:"center",justifyContent:"center",width:wp(30),height:hp(4)}}>
                            <Text style={{color:"white", fontSize:wp(3)}}>Remove</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>

                <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:hp(2),paddingBottom:hp(1)}}>
                    <View style={{flexDirection:"row",justifyContent:"center"}}>
                        <Image 
                            source={Banner}
                            style={{width:wp(10),height:hp(5),borderRadius:wp(100),marginLeft:wp(8),paddingTop:hp(5)}}
                        />
                        <View style={{justifyContent:"center"}}>
                            <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(3)}}>BinduSai69</Text>
                            <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(2.5)}}>bindugattamaneni</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center",paddingRight:wp(10)}}>
                        <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:wp(2),alignItems:"center",justifyContent:"center",width:wp(30),height:hp(4)}}>
                            <Text style={{color:"white", fontSize:wp(3)}}>Remove</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>

                <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:hp(2),paddingBottom:hp(1)}}>
                    <View style={{flexDirection:"row",justifyContent:"center"}}>
                        <Image 
                            source={Banner}
                            style={{width:wp(10),height:hp(5),borderRadius:wp(100),marginLeft:wp(8),paddingTop:hp(5)}}
                        />
                        <View style={{justifyContent:"center"}}>
                            <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(3)}}>NandiniGangarapu</Text>
                            <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(2.5)}}>nandu_papa_</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center",paddingRight:wp(10)}}>
                        <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:wp(2),alignItems:"center",justifyContent:"center",width:wp(30),height:hp(4)}}>
                            <Text style={{color:"white", fontSize:wp(3)}}>Remove</Text>
                        </TouchableOpacity>
                        
                    </View>
                </View>

                <View style={{flexDirection:"row",justifyContent:"space-between",paddingVertical:hp(2),paddingBottom:hp(1)}}>
                    <View style={{flexDirection:"row",justifyContent:"center"}}>
                        <Image 
                            source={Banner}
                            style={{width:wp(10),height:hp(5),borderRadius:wp(100),marginLeft:wp(8),paddingTop:hp(5)}}
                        />
                        <View style={{justifyContent:"center"}}>
                            <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(3)}}>NithyaNandini</Text>
                            <Text style={{color:"white",marginLeft:wp(2),fontSize:wp(2.5)}}>nithyanandini</Text>
                        </View>
                    </View>
                    <View style={{flexDirection:"row",alignItems:"center",paddingRight:wp(10)}}>
                        <TouchableOpacity style={{borderWidth:1,borderColor:"white", borderRadius:wp(2),alignItems:"center",justifyContent:"center",width:wp(30),height:hp(4)}}>
                            <Text style={{color:"white", fontSize:wp(3)}}>Remove</Text>
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

export default Followpage