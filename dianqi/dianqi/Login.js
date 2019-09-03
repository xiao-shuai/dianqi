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
import {inject,observer} from 'mobx-react'
@inject(["Dian"])
@observer // 监听当前组件
class Login  extends Component{
    static navigationOptions = {
        header:null
        // title: 'ログイン',
        // headerStyle: {
        //     backgroundColor: '#12FFF7',
        //   },
        //   headerTintColor:'white'
        // header:null
      }
    constructor(props){
      super(props)
      this.state={

      }
    }
 add_user=()=>{
     if(this.state.user==undefined){
      Alert.alert('ヒント','アカウントを入力してください',[{'text':'分かりました',}])
     }else if(this.state.pwd==undefined){
        Alert.alert('ヒント','パスワードを入力してください',[{'text':'分かりました',}])
     }else {
        this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Dianqi' })], 0)
        AsyncStorage.setItem('bb','ok')

     }
 }
    render(){
        const data=this.props.Dian.list
        return(
            <SafeAreaView style={{flex:1,alignItems:'center'}}>
             <KeyboardAwareScrollView contentContainerStyle={{alignItems:'center'}}>
                 <Image source={require('../imgges/logo.png')} style={{
                     width:dian.w*.3,height:dian.w*.3,marginTop:20,
                     borderRadius:dian.w*.15
                     }}/>
                 <Text style={{fontSize:16,marginTop:20,color:dian.theme}}>生活のメンテナンス</Text> 

              <Input label='アカウント' containerStyle={{
                  marginTop:30,width:dian.w*.95,
              }} inputContainerStyle={{padding:10}} 
              placeholder='アカウントを入力してください' 
               onChangeText={(user)=>{
                 this.setState({user})
               }}
              />
              <Input label='パスワード' containerStyle={{
                  marginTop:30,width:dian.w*.95,
              }} inputContainerStyle={{padding:10}} 
              placeholder='パスワードを入力してください' 
               onChangeText={(pwd)=>{
                  this.setState({pwd})
               }}
              />
             
             <Button title='ログイン' buttonStyle={{marginTop:20,backgroundColor:dian.theme,width:dian.w*.9}} 
               onPress={()=>{
                this.add_user()
               }}
             />
             <TouchableOpacity style={{marginTop:20}} onPress={()=>{
                 Alert.alert('ヒント','パスワードを忘れたら、010-4553789に連絡してパスワードを探してください。',[{'text':'分かりました'}])
             }}>
                 <Text style={{color:'#A6ACAF'}}>パスワードを忘れますか？</Text>
             </TouchableOpacity>

             </KeyboardAwareScrollView>
            </SafeAreaView>
        )
    }
}

export default Login