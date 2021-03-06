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
    if(this.state.add==undefined){
        return Alert.alert('ヒント','住所を入力してください',[{'text':'分かりました'}])
    }
    if(this.state.money==undefined){
        return Alert.alert('ヒント','予算の金額は空です。',[{'text':'分かりました'}])
    }
    if(this.state.xx==undefined){
        return Alert.alert('ヒント','修理の詳細は空です。',[{'text':'分かりました'}])
    }
    let a= {
        name:this.state.name,
        phone:this.state.phone,
        money:this.state.money,
        add:this.state.add
    } 
    this.props.Dian.add_list(a)
    this.props.navigation.navigate('My_dd')

    fetch('https://www.fastmock.site/mock/a81b9e8ab453b4f3d0e70963138bc7e7/japenweixiu/order',{method:'POST'})
    .then(res=>res.json())
    .then().catch()
    // Alert.alert('','',[{'text':''}])

 }
    render(){
        console.log('aa:',this.props.Dian.list);
        
        const info=this.props.navigation.getParam('info')
        return(
        <SafeAreaView style={{flex:1}}>
           <KeyboardAwareScrollView contentContainerStyle={{alignItems:'center'}}>
           
           <Input label='修理の種類' containerStyle={{marginTop:20,width:dian.w*.95}} 
            editable={false}
            defaultValue={info}
           />
           <Input label='名前' containerStyle={{marginTop:20,width:dian.w*.95}} 
            placeholder='名前を入力してください'
            onChangeText={(name)=>{
            this.setState({name})
            }}
           />
           <Input label='連絡電話' containerStyle={{marginTop:20,width:dian.w*.95}} 
              placeholder='電話を入力してください'
             onChangeText={(phone)=>{
             this.setState({phone})
             }}
            />
            <Input label='住所' containerStyle={{marginTop:20,width:dian.w*.95}} 
             placeholder='住所を入力してください'
             onChangeText={(add)=>{
             this.setState({add})
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
                marginTop:20,width:dian.w*.9,backgroundColor:dian.theme,marginBottom:10
            }} onPress={()=>{
               this.submit()
            }}/>
         </KeyboardAwareScrollView> 
        
        </SafeAreaView>
        )
    }
}

export default Fen_lei