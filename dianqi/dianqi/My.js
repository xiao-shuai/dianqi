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
import {Input,Button,Divider} from 'react-native-elements'
import { NavigationActions } from 'react-navigation';
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Swiper from 'react-native-swiper';
import {dian} from '../config/config'
class My  extends Component{
    static navigationOptions = {
        title: '私の',
        // header:null
      }
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
        <SafeAreaView style={{flex:1}}>
         <View style={{padding:20,alignItems:'center'}}>
             <Image source={require('../imgges/logo.png')} style={{
                 width:dian.w*.3,height:dian.w*.3,borderRadius:dian.w*.15
             }}/>
         </View>
       <Divider style={{width:dian.w,height:10,backgroundColor:'#E5E7E9'}}/>
     
      <TouchableOpacity style={{padding:20}} onPress={()=>{
      
      }}>
          <Text style={{fontSize:18,color:'#515A5A'}}>私の注文</Text>
          <Ionicons />
      </TouchableOpacity>

        </SafeAreaView>
        )
    }
}

export default My