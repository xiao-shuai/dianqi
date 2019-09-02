import React from 'react';
import { 
  createBottomTabNavigator, 
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator 
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Dianqi from '../dianqi/Dianqi'
import Xiaoxi from '../dianqi/Xiaoxi'
import My from '../dianqi/My'
import SwiperPage from '../dianqi/SwiperPage'
import Fen_lei from '../dianqi/Fen_lei'
import Jia_dian from '../dianqi/Jia_dian'
const  ALLPAGE=createStackNavigator({
    // BOTM:({ screen:Dian,})
    Dianqi:({screen:Dianqi}),
    Xiaoxi:({screen:Xiaoxi}),
    My:({screen:My}),
    SwiperPage:({screen:SwiperPage}),
    Fen_lei:({screen:Fen_lei}),
    Jia_dian:({screen:Jia_dian})

    

    
})

export default createAppContainer(ALLPAGE)