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
class Fen_lei  extends Component{
    static navigationOptions = {
        title: 'アプライアンスの修理',
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
        
        </SafeAreaView>
        )
    }
}

export default Fen_lei