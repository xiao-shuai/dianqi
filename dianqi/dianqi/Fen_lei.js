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
        title: '分類された順序',
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
        const data=[
            {
              tit:'冷蔵庫の修理',  
            },
            {
                tit:'水道の修理',  
            },
            {
                tit:'电路维修',  
            },
            {
                tit:'電気回路の修理',  
            },
            {
                tit:'コンピュータの修理',  
            },
            {
                tit:'エアコンの修理',  
            },
            {
                tit:'洗濯機の修理',  
            },
            {
                tit:'その他の修理'
            }

        ]
        return(
        <SafeAreaView style={{flex:1}}>
         <ScrollView contentContainerStyle={{alignItems:'center',padding:20}}>
          {
              data.map((i,k)=>{
                  return (
                  <TouchableOpacity onPress={()=>{
            this.props.navigation.navigate('Jia_dian',{info:i.tit})
                  }} key={k} style={{padding:10,backgroundColor:'#99A3A4',width:'95%',marginTop:20}}>
                  <Text style={{fontSize:18,color:'white'}}>{i.tit}</Text>  

                  </TouchableOpacity>
                  )
              })
          }
         </ScrollView>
        </SafeAreaView>
        )
    }
}

export default Fen_lei