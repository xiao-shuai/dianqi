import React, {Component} from 'react'
import {View,
    Text,
    TouchableOpacity,
    Image,
    AsyncStorage
    ,ScrollView,
    StyleSheet,Alert,
    ActivityIndicator,SafeAreaView,ImageBackground
} from 'react-native'
// import  {cloth} from '../config/config'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import {Input,Button} from 'react-native-elements'
import { NavigationActions } from 'react-navigation';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Swiper from 'react-native-swiper';
import {dian} from '../config/config'

class My_news extends  Component{
    static navigationOptions = {
        title: 'メッセージ',
        headerStyle: {
            backgroundColor: '#12FFF7',
          },
          headerTintColor:'white'
        // header:null
      }
    constructor(props){
      super(props)
      this.state={

      }
    }

 render (){
    return (
    <SafeAreaView style={{flex:1,alignItems:'center'}}>
      
     <Image source={require('../imgges/no.png')} style={{
         width:dian.w*.2,height:dian.w*.2,marginTop:dian.h*.2
     }}/>
     <Text style={{marginTop:10,color:'#D7DBDD'}}>消息がない</Text>

    </SafeAreaView>
    )
 }
}
export default My_news