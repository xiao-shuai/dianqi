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
class Xiaoxi  extends Component{
    static navigationOptions = {
        title: '最新ニュース',
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

    render(){
        return(
        <SafeAreaView style={{flex:1,alignItems:'center'}}>
           <Image source={require('../imgges/kong.png')} 
             style={{width:100,height:100,marginTop:200}}
            />
            <Text style={{color:'#CCD1D1'}}>まだデータがありません</Text>
        </SafeAreaView>
        )
    }
}

export default Xiaoxi