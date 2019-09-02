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
 submit=()=>{
     if(this.state.name==undefined){
         return Alert.alert('ヒント','名前を入力してください',[{'text':'分かりました'}])
     }
     if(this.state.phone==undefined){
        return Alert.alert('ヒント','電話番号を入力してください。',[{'text':'分かりました'}])
    }
    if(this.state.money==undefined){
        return Alert.alert('ヒント','予算の金額は空です。',[{'text':'分かりました'}])
    }
    if(this.state.xx==undefined){
        return Alert.alert('ヒント','修理の詳細は空です。',[{'text':'分かりました'}])
    }
        

 }
    render(){
        const info=this.props.navigation.getParam('info')
        return(
        <SafeAreaView style={{flex:1}}>
           <ScrollView contentContainerStyle={{alignItems:'center'}}>
           
           <Input label='修理の種類' containerStyle={{marginTop:20,width:dian.w*.95}} 
            editable={false}
            defaultValue={info}
           />
           <Input label='名前' containerStyle={{marginTop:20,width:dian.w*.95}} 
            onChangeText={(name)=>{
            this.setState({name})
            }}
           />
           <Input label='連絡電話' containerStyle={{marginTop:20,width:dian.w*.95}} 
             onChangeText={(phone)=>{
             this.setState({phone})
             }}
            />
             <Input label='予算賃金' containerStyle={{marginTop:20,width:dian.w*.95}} 
             placeholder='オフラインのみのお支払いに対応しています。'
             multiline={true}
             onChangeText={(money)=>{
              this.setState({money})   
             }}
            />
             
             <Input label='修理の詳細' containerStyle={{marginTop:20,width:dian.w*.95}} 
             placeholder='修理が必要な物品の詳細について、詳しく説明してください。'
             multiline={true}
            inputContainerStyle={{marginTop:10}}
            onChangeText={(xx)=>{
            this.setState({xx})
            }}
            
            />
             <Input label='コメント' containerStyle={{marginTop:20,width:dian.w*.95}} 
             placeholder='他に必要なものがありましたら、ここに備考してください。'
             multiline={true}
            inputContainerStyle={{marginTop:10}}
            onChangeText={(note)=>{
            this.setState({note})
            }}
            />
            <Button title='送信' buttonStyle={{
                marginTop:20,width:dian.w*.9,backgroundColor:dian.theme
            }} onPress={()=>{
               this.submit()
            }}/>
         </ScrollView> 
        
        </SafeAreaView>
        )
    }
}

export default Fen_lei