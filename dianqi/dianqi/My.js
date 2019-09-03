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
  tuichu=()=>{
      this.props.navigation.navigate('Login')
      AsyncStorage.removeItem('bb')
      fetch('https://www.fastmock.site/mock/a81b9e8ab453b4f3d0e70963138bc7e7/japenweixiu/exit',{method:'POST'})
      .then(res=>res.json())
      .then(res=>{})
      .catch(err=>{})
  }
    render(){
        return(
        <SafeAreaView style={{flex:1,}}>
         <View style={{padding:20,alignItems:'center'}}>
             <Image source={require('../imgges/logo.png')} style={{
                 width:dian.w*.3,height:dian.w*.3,borderRadius:dian.w*.15
             }}/>
         </View>
       <Divider style={{width:dian.w,height:10,backgroundColor:'#E5E7E9'}}/>
     
      <TouchableOpacity style={{padding:20,flexDirection:'row',
      justifyContent:'space-between',borderBottomColor:'#E5E7E9',
      borderBottomWidth:1
      }} onPress={()=>{  
          this.props.navigation.navigate('My_dd')  
      }} >
          <Text style={{fontSize:18,color:'#515A5A'}}>私の注文</Text>
          <Ionicons name='ios-arrow-forward' style={{fontSize:20,color:dian.hui}}/>
      </TouchableOpacity>
      <TouchableOpacity style={{padding:20,flexDirection:'row',
      justifyContent:'space-between',borderBottomColor:'#E5E7E9',
      borderBottomWidth:1
      }} onPress={()=>{    
          this.props.navigation.navigate('My_news')
      }} >
          <Text style={{fontSize:18,color:'#515A5A'}}>私のニュース</Text>
          <Ionicons name='ios-arrow-forward' style={{fontSize:20,color:dian.hui}}/>
      </TouchableOpacity>

      <TouchableOpacity style={{padding:20,flexDirection:'row',
      justifyContent:'space-between',borderBottomColor:'#E5E7E9',
      borderBottomWidth:1
      }} onPress={()=>{  
          this.props.navigation.navigate('My_err')  
      }} >
          <Text style={{fontSize:18,color:'#515A5A'}}>私のフィードバック</Text>
          <Ionicons name='ios-arrow-forward' style={{fontSize:20,color:dian.hui}}/>
      </TouchableOpacity>

      <Button title='ログアウト' buttonStyle={{marginTop:20,width:'95%',marginLeft:'2.5%',backgroundColor:dian.theme}} 
         onPress={()=>{
        this.tuichu()
         }}
      />

        </SafeAreaView>
        )
    }
}

export default My