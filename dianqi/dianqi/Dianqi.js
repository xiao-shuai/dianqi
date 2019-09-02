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
class Dianqi  extends Component{
    static navigationOptions = {
        // title: 'log in',
        header:null,
        headerBackTitle:null,
        headerStyle: {
            backgroundColor: '#12FFF7',
          },
      }
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return(
        <SafeAreaView style={{flex:1}}>
        <ImageBackground 
        source={require('../imgges/bg1.jpg')}
        style={{flexDirection:'row',justifyContent:'space-between',padding:20,alignItems:'center'}}>
            <TouchableOpacity onPress={()=>{
                this.props.navigation.navigate('My')
            }}>
            <EvilIcons name='navicon' style={{fontSize:30,color:'white'}}  />
            </TouchableOpacity>
            <Text style={{color:'white'}}>ハウスキーピングサービス</Text>
            <TouchableOpacity onPress={()=>{
                this.props.navigation.navigate('Xiaoxi')
            }}>
            <EvilIcons name='bell' style={{fontSize:30,color:'white'}}/>
            </TouchableOpacity>
        </ImageBackground>
        

        <ScrollView contentContainerStyle={{}}>
        
        <Swiper  style={{
            // width:'100%',
            marginTop:20,
        height:dian.h*.25
        }}>
         <TouchableOpacity onPress={()=>{
             this.props.navigation.navigate('SwiperPage')
         }}>
        <ImageBackground source={require('../imgges/bg1.jpg')} style={{
            width:dian.w,height:dian.h*.25,justifyContent:'center',
            padding:20,
            flexDirection:'row',alignItems:'center'
        }}>
        <Image source={require('../imgges/xiu1.png')} style={{
            width:100,height:100
        }}/>
        <Text style={{color:'white',fontSize:18}}>いいヘルパーに仕えましょう</Text>
        </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
            this.props.navigation.navigate('SwiperPage')
        }}>
        <ImageBackground source={require('../imgges/bg1.jpg')} style={{
           width:dian.w,height:dian.h*.25,justifyContent:'center',
           padding:20,
           flexDirection:'row',alignItems:'center'
        }}>
         <Image source={require('../imgges/xiu2.png')} style={{
            width:100,height:100
        }}/>
        <View style={{width:dian.w*.65}}>
        <Text style={{color:'white',fontSize:18}}>お客様第一、あなたにサービスを提供</Text>
        </View>
        </ImageBackground>
        </TouchableOpacity>
        
        </Swiper>

        {/*  */}
        <View style={{flexDirection:'row',
        justifyContent:'space-between',padding:20,
        width:dian.w
        }}>
            <View style={{width:'47%',
            justifyContent:'space-between',
            height:dian.h*.4}}>
             <TouchableOpacity onPress={()=>{
                 this.props.navigation.navigate('Fen_lei')
             }}>
             <ImageBackground source={require('../imgges/bg1.jpg')} 
              style={{width:'100%',height:dian.h*.18,alignItems:'center',justifyContent:'center'}}
              >
             <Image source={require('../imgges/fenlei.png')} style={{
                 width:50,height:50,
             }}/>
             <Text style={{color:'white',marginTop:10,fontSize:16}}>分類された順序</Text>
            </ImageBackground> 
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>{
                 this.props.navigation.navigate('Jia_dian',{info:'家電クリーニング'})
             }}>
             <ImageBackground source={require('../imgges/bg1.jpg')} 
              style={{width:'100%',height:dian.h*.18,alignItems:'center',justifyContent:'center'}}
              >
             <Image source={require('../imgges/jiadian.png')} style={{
                 width:50,height:50,
             }}/>
             <Text style={{color:'white',marginTop:10,fontSize:16}}>家電クリーニング</Text>
            </ImageBackground> 
             </TouchableOpacity>
            </View>
            <TouchableOpacity style={{width:'47%',height:dian.h*.4}} onPress={()=>{
                this.props.navigation.navigate('Jia_dian',{info:'直接予約'})
            }}>
            <ImageBackground source={require('../imgges/bg1.jpg')} 
             style={{width:'100%',height:dian.h*.4,alignItems:'center',justifyContent:'center'}}
            >
            <Image source={require('../imgges/yy.png')} style={{
                 width:50,height:50,
             }}/>
             <Text style={{color:'white',marginTop:10,fontSize:16}}>直接予約</Text>
            </ImageBackground>
            </TouchableOpacity>
        </View>

       
        </ScrollView>
        </SafeAreaView>
        )
    }
}

export default Dianqi