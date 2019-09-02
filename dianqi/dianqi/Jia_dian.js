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
            onChangeText={()=>{

            }}
           />
           <Input label='連絡電話' containerStyle={{marginTop:20,width:dian.w*.95}} 
            
            />
             <Input label='予算賃金' containerStyle={{marginTop:20,width:dian.w*.95}} 
            
            />
             <Input label='予算賃金' containerStyle={{marginTop:20,width:dian.w*.95}} 
            
            />
             <Input label='修理の詳細' containerStyle={{marginTop:20,width:dian.w*.95}} 
             placeholder='修理が必要な物品の詳細について、詳しく説明してください。'
             multiline={true}
            inputContainerStyle={{marginTop:10}}
            
            />
             <Input label='コメント' containerStyle={{marginTop:20,width:dian.w*.95}} 
             placeholder='他に必要なものがありましたら、ここに備考してください。'
             multiline={true}
            inputContainerStyle={{marginTop:10}}
            
            />
            <Button title='送信' buttonStyle={{
                marginTop:20,width:dian.w*.9,backgroundColor:dian.theme
            }}/>
         </ScrollView> 
        
        </SafeAreaView>
        )
    }
}

export default Fen_lei