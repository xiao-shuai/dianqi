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


const  ALLPAGE=createStackNavigator({
    // BOTM:({ screen:Dian,})
    Dianqi:({screen:Dianqi}),
    Xiaoxi:({screen:Xiaoxi})
    
})

export default createAppContainer(ALLPAGE)