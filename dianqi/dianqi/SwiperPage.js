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
class SwiperPage extends Component{
    static navigationOptions = {
        title: 'はじめに',
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
        <SafeAreaView style={{flex:1}}>
            <ScrollView contentContainerStyle={{alignItems:'center',padding:20}}>
             <Text style={styles.tit}>私たちのアプリはどう使いますか？</Text>
             <Text style={styles.con}>私達のAPPはオンライン保証用の家電家具で、ユーザーが便利に使って、仕事の効率を高めます。</Text>
             <Text style={styles.con}>私達のアプリはユーザーに多くの便利をもたらします。お客さんが家から出なくてもオンラインで修理できる待遇です。</Text>
            <Image source={require('../imgges/xqbanner.png')} style={{width:dian.w*.9,
                height:dian.h*.25,marginTop:20}}/>
            <Text style={styles.con}>ユーザーはいつでもどこでもこのアプリを使って保証してくれます。便利です。</Text>  
            <Text style={styles.con}>画像をアップロードできます。保証したいタイプを選ぶのは便利です。</Text>
            <Text style={styles.con}>何か提案があればいつでもフィードバックしてください。</Text>
            <Text style={styles.con}>私たちは全力であなたの問題を解決します。もし何か提案があれば、いつでもフィードバックしてください。</Text>
            </ScrollView>
        </SafeAreaView>
        )
    }
}

export default SwiperPage

const styles =StyleSheet.create({
    con:{
        marginTop:20,color:dian.hui,lineHeight:18,fontSize:16
    },
    tit:{
        color:dian.hui,fontSize:18
    }
})