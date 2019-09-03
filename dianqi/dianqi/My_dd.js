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
class My_dd  extends Component{
    static navigationOptions = {
        title: '私の注文',
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
        const data=this.props.Dian.list
        return(
            <SafeAreaView style={{flex:1,alignItems:'center'}}>
            <ScrollView contentContainerStyle={{padding:20,width:dian.w,alignItems:'center'}}>
                {
                    data.map((i,k)=>{
                  return    <View style={{
                    width:'95%',
                    shadowColor:'#76D7C4',
                    shadowOpacity:.8,
                    shadowOffset:{width:1,height:1},
                    backgroundColor:'white',
                    padding:20,
                    marginTop:20
                    }}>
                <Text style={{fontSize:16,color:dian.hui}}> 名前: {i.name}</Text>
                <Text style={{fontSize:16,color:dian.hui,marginTop:10}}> 電話: {i.phone}</Text>
                <Text style={{fontSize:16,color:dian.hui,marginTop:10}}> 予算: {i.money}</Text>
                <Text style={{fontSize:16,color:dian.hui,marginTop:10}}> 住所: {i.add}</Text>
                </View>
                    })
                }

            </ScrollView>
            </SafeAreaView>
        )
    }
}

export default My_dd