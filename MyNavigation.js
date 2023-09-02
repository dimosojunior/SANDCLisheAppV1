import 'react-native-gesture-handler';
import 'react-native-reanimated';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TouchableOpacity, Text, View } from 'react-native';

import MyDrawer from './Drawer/drawer';
import MyStack from './Stack/MyStack';
import MyTabs from './Tab/MyTabs';
import MainHeader from './Headers/MainHeader';
import { useNavigation } from '@react-navigation/native';


import { Ionicons,MaterialIcons,AntDesign, FontAwesome, FontAwesome5} from '@expo/vector-icons';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import Header from '../Headers/header';
// import LisheScreen from '../Lishe/LisheScreen';

import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import HomeScreen from './Screens/HomeScreen';
import AboutScreen from './Screens/AboutScreen';
import ProfileScreen from './Screens/ProfileScreen';

import ViewDetailScreen from './Screens/ViewDetailScreen';
import Signup from './AccountScreens/SignupScreen';
import Login from './AccountScreens/SigninScreen';


import LisheScreen from './Lishe/LisheScreen';
import ElimuLisheScreen from './ElimuLishe/ElimuLisheScreen';
import BidhaaZetuScreen from './BidhaaZetu/BidhaaZetuScreen';

import WatotoHomeScreen from './Watoto/WatotoHomeScreen';
import FamiliaHomeScreen from './Familia/FamiliaHomeScreen';
import KisukariHomeScreen from './Kisukari/KisukariHomeScreen';
import HivHomeScreen from './Hiv/HivHomeScreen';
import WajawazitoHomeScreen from './Wajawazito/WajawazitoHomeScreen';
import UzitoZaidiHomeScreen from './UzitoZaidi/UzitoZaidiHomeScreen';

//DAYS
import WatotoDayOneScreen from './Watoto/WatotoDayOneScreen';
import WatotoDayTwoScreen from './Watoto/WatotoDayTwoScreen';
import WatotoDayThreeScreen from './Watoto/WatotoDayThreeScreen';
import WatotoDayFourScreen from './Watoto/WatotoDayFourScreen';
import WatotoDayFiveScreen from './Watoto/WatotoDayFiveScreen';
import WatotoDaySixScreen from './Watoto/WatotoDaySixScreen';
import WatotoDaySevenScreen from './Watoto/WatotoDaySevenScreen';



import FamiliaDayOneScreen from './Familia/FamiliaDayOneScreen';
import FamiliaDayTwoScreen from './Familia/FamiliaDayTwoScreen';
import FamiliaDayThreeScreen from './Familia/FamiliaDayThreeScreen';
import FamiliaDayFourScreen from './Familia/FamiliaDayFourScreen';
import FamiliaDayFiveScreen from './Familia/FamiliaDayFiveScreen';
import FamiliaDaySixScreen from './Familia/FamiliaDaySixScreen';
import FamiliaDaySevenScreen from './Familia/FamiliaDaySevenScreen';


import KisukariDayOneScreen from './Kisukari/KisukariDayOneScreen';
import KisukariDayTwoScreen from './Kisukari/KisukariDayTwoScreen';
import KisukariDayThreeScreen from './Kisukari/KisukariDayThreeScreen';
import KisukariDayFourScreen from './Kisukari/KisukariDayFourScreen';
import KisukariDayFiveScreen from './Kisukari/KisukariDayFiveScreen';
import KisukariDaySixScreen from './Kisukari/KisukariDaySixScreen';
import KisukariDaySevenScreen from './Kisukari/KisukariDaySevenScreen';


import HivDayOneScreen from './Hiv/HivDayOneScreen';
import HivDayTwoScreen from './Hiv/HivDayTwoScreen';
import HivDayThreeScreen from './Hiv/HivDayThreeScreen';
import HivDayFourScreen from './Hiv/HivDayFourScreen';
import HivDayFiveScreen from './Hiv/HivDayFiveScreen';
import HivDaySixScreen from './Hiv/HivDaySixScreen';
import HivDaySevenScreen from './Hiv/HivDaySevenScreen';



import WajawazitoDayOneScreen from './Wajawazito/WajawazitoDayOneScreen';
import WajawazitoDayTwoScreen from './Wajawazito/WajawazitoDayTwoScreen';
import WajawazitoDayThreeScreen from './Wajawazito/WajawazitoDayThreeScreen';
import WajawazitoDayFourScreen from './Wajawazito/WajawazitoDayFourScreen';
import WajawazitoDayFiveScreen from './Wajawazito/WajawazitoDayFiveScreen';
import WajawazitoDaySixScreen from './Wajawazito/WajawazitoDaySixScreen';
import WajawazitoDaySevenScreen from './Wajawazito/WajawazitoDaySevenScreen';


import UzitoZaidiDayOneScreen from './UzitoZaidi/UzitoZaidiDayOneScreen';
import UzitoZaidiDayTwoScreen from './UzitoZaidi/UzitoZaidiDayTwoScreen';
import UzitoZaidiDayThreeScreen from './UzitoZaidi/UzitoZaidiDayThreeScreen';
import UzitoZaidiDayFourScreen from './UzitoZaidi/UzitoZaidiDayFourScreen';
import UzitoZaidiDayFiveScreen from './UzitoZaidi/UzitoZaidiDayFiveScreen';
import UzitoZaidiDaySixScreen from './UzitoZaidi/UzitoZaidiDaySixScreen';
import UzitoZaidiDaySevenScreen from './UzitoZaidi/UzitoZaidiDaySevenScreen';



import MakundiYaChakulaScreen from './MakundiYaChakula/MakundiYaChakulaScreen';
import PostersNaPichaScreen from './PostersNaPicha/PostersNaPichaScreen';

import OnboardingScreen from './Onboarding/OnboardingScreen';



import WajawazitoWiki1 from './Wajawazito/WajawazitoWiki1';
import WajawazitoWiki2 from './Wajawazito/WajawazitoWiki2';
import WajawazitoWiki3 from './Wajawazito/WajawazitoWiki3';
import WajawazitoWiki4 from './Wajawazito/WajawazitoWiki4';
import WajawazitoWiki5 from './Wajawazito/WajawazitoWiki5';
import WajawazitoWiki6 from './Wajawazito/WajawazitoWiki6';
import WajawazitoWiki7 from './Wajawazito/WajawazitoWiki7';
import WajawazitoWiki8 from './Wajawazito/WajawazitoWiki8';
import WajawazitoWiki9 from './Wajawazito/WajawazitoWiki9';
import WajawazitoWiki10 from './Wajawazito/WajawazitoWiki10';
import WajawazitoWiki11 from './Wajawazito/WajawazitoWiki11';
import WajawazitoWiki12 from './Wajawazito/WajawazitoWiki12';
import WajawazitoWiki13 from './Wajawazito/WajawazitoWiki13';
import WajawazitoWiki14 from './Wajawazito/WajawazitoWiki14';
import WajawazitoWiki15 from './Wajawazito/WajawazitoWiki15';
import WajawazitoWiki16 from './Wajawazito/WajawazitoWiki16';
import WajawazitoWiki17 from './Wajawazito/WajawazitoWiki17';
import WajawazitoWiki18 from './Wajawazito/WajawazitoWiki18';
import WajawazitoWiki19 from './Wajawazito/WajawazitoWiki19';
import WajawazitoWiki20 from './Wajawazito/WajawazitoWiki20';
import WajawazitoWiki21 from './Wajawazito/WajawazitoWiki21';
import WajawazitoWiki22 from './Wajawazito/WajawazitoWiki22';
import WajawazitoWiki23 from './Wajawazito/WajawazitoWiki23';
import WajawazitoWiki24 from './Wajawazito/WajawazitoWiki24';
import WajawazitoWiki25 from './Wajawazito/WajawazitoWiki25';
import WajawazitoWiki26 from './Wajawazito/WajawazitoWiki26';
import WajawazitoWiki27 from './Wajawazito/WajawazitoWiki27';
import WajawazitoWiki28 from './Wajawazito/WajawazitoWiki28';
import WajawazitoWiki29 from './Wajawazito/WajawazitoWiki29';
import WajawazitoWiki30 from './Wajawazito/WajawazitoWiki30';
import WajawazitoWiki31 from './Wajawazito/WajawazitoWiki31';
import WajawazitoWiki32 from './Wajawazito/WajawazitoWiki32';
import WajawazitoWiki33 from './Wajawazito/WajawazitoWiki33';
import WajawazitoWiki34 from './Wajawazito/WajawazitoWiki34';
import WajawazitoWiki35 from './Wajawazito/WajawazitoWiki35';
import WajawazitoWiki36 from './Wajawazito/WajawazitoWiki36';
import WajawazitoWiki37 from './Wajawazito/WajawazitoWiki37';
import WajawazitoWiki38 from './Wajawazito/WajawazitoWiki38';
import WajawazitoWiki39 from './Wajawazito/WajawazitoWiki39';
import WajawazitoWiki40 from './Wajawazito/WajawazitoWiki40';
import WajawazitoWiki41 from './Wajawazito/WajawazitoWiki41';
import WajawazitoWiki42 from './Wajawazito/WajawazitoWiki42';
import WajawazitoWiki43 from './Wajawazito/WajawazitoWiki43';
import WajawazitoWiki44 from './Wajawazito/WajawazitoWiki44';
import WajawazitoWiki45 from './Wajawazito/WajawazitoWiki45';




import WatotoWiki1 from './Watoto/WatotoWiki1';
import WatotoWiki2 from './Watoto/WatotoWiki2';
import WatotoWiki3 from './Watoto/WatotoWiki3';
import WatotoWiki4 from './Watoto/WatotoWiki4';
import WatotoWiki5 from './Watoto/WatotoWiki5';
import WatotoWiki6 from './Watoto/WatotoWiki6';
import WatotoWiki7 from './Watoto/WatotoWiki7';
import WatotoWiki8 from './Watoto/WatotoWiki8';
import WatotoWiki9 from './Watoto/WatotoWiki9';
import WatotoWiki10 from './Watoto/WatotoWiki10';
import WatotoWiki11 from './Watoto/WatotoWiki11';
import WatotoWiki12 from './Watoto/WatotoWiki12';
import WatotoWiki13 from './Watoto/WatotoWiki13';
import WatotoWiki14 from './Watoto/WatotoWiki14';
import WatotoWiki15 from './Watoto/WatotoWiki15';
import WatotoWiki16 from './Watoto/WatotoWiki16';
import WatotoWiki17 from './Watoto/WatotoWiki17';
import WatotoWiki18 from './Watoto/WatotoWiki18';
import WatotoWiki19 from './Watoto/WatotoWiki19';
import WatotoWiki20 from './Watoto/WatotoWiki20';
import WatotoWiki21 from './Watoto/WatotoWiki21';
import WatotoWiki22 from './Watoto/WatotoWiki22';
import WatotoWiki23 from './Watoto/WatotoWiki23';
import WatotoWiki24 from './Watoto/WatotoWiki24';
import WatotoWiki25 from './Watoto/WatotoWiki25';
import WatotoWiki26 from './Watoto/WatotoWiki26';
import WatotoWiki27 from './Watoto/WatotoWiki27';
import WatotoWiki28 from './Watoto/WatotoWiki28';
import WatotoWiki29 from './Watoto/WatotoWiki29';
import WatotoWiki30 from './Watoto/WatotoWiki30';
import WatotoWiki31 from './Watoto/WatotoWiki31';
import WatotoWiki32 from './Watoto/WatotoWiki32';
import WatotoWiki33 from './Watoto/WatotoWiki33';
import WatotoWiki34 from './Watoto/WatotoWiki34';
import WatotoWiki35 from './Watoto/WatotoWiki35';
import WatotoWiki36 from './Watoto/WatotoWiki36';
import WatotoWiki37 from './Watoto/WatotoWiki37';
import WatotoWiki38 from './Watoto/WatotoWiki38';
import WatotoWiki39 from './Watoto/WatotoWiki39';
import WatotoWiki40 from './Watoto/WatotoWiki40';
import WatotoWiki41 from './Watoto/WatotoWiki41';
import WatotoWiki42 from './Watoto/WatotoWiki42';
import WatotoWiki43 from './Watoto/WatotoWiki43';
import WatotoWiki44 from './Watoto/WatotoWiki44';
import WatotoWiki45 from './Watoto/WatotoWiki45';



import KisukariWiki1 from './Kisukari/KisukariWiki1';
import KisukariWiki2 from './Kisukari/KisukariWiki2';
import KisukariWiki3 from './Kisukari/KisukariWiki3';
import KisukariWiki4 from './Kisukari/KisukariWiki4';
import KisukariWiki5 from './Kisukari/KisukariWiki5';
import KisukariWiki6 from './Kisukari/KisukariWiki6';
import KisukariWiki7 from './Kisukari/KisukariWiki7';
import KisukariWiki8 from './Kisukari/KisukariWiki8';
import KisukariWiki9 from './Kisukari/KisukariWiki9';
import KisukariWiki10 from './Kisukari/KisukariWiki10';
import KisukariWiki11 from './Kisukari/KisukariWiki11';
import KisukariWiki12 from './Kisukari/KisukariWiki12';
import KisukariWiki13 from './Kisukari/KisukariWiki13';
import KisukariWiki14 from './Kisukari/KisukariWiki14';
import KisukariWiki15 from './Kisukari/KisukariWiki15';
import KisukariWiki16 from './Kisukari/KisukariWiki16';
import KisukariWiki17 from './Kisukari/KisukariWiki17';
import KisukariWiki18 from './Kisukari/KisukariWiki18';
import KisukariWiki19 from './Kisukari/KisukariWiki19';
import KisukariWiki20 from './Kisukari/KisukariWiki20';
import KisukariWiki21 from './Kisukari/KisukariWiki21';
import KisukariWiki22 from './Kisukari/KisukariWiki22';
import KisukariWiki23 from './Kisukari/KisukariWiki23';
import KisukariWiki24 from './Kisukari/KisukariWiki24';
import KisukariWiki25 from './Kisukari/KisukariWiki25';
import KisukariWiki26 from './Kisukari/KisukariWiki26';
import KisukariWiki27 from './Kisukari/KisukariWiki27';
import KisukariWiki28 from './Kisukari/KisukariWiki28';
import KisukariWiki29 from './Kisukari/KisukariWiki29';
import KisukariWiki30 from './Kisukari/KisukariWiki30';
import KisukariWiki31 from './Kisukari/KisukariWiki31';
import KisukariWiki32 from './Kisukari/KisukariWiki32';
import KisukariWiki33 from './Kisukari/KisukariWiki33';
import KisukariWiki34 from './Kisukari/KisukariWiki34';
import KisukariWiki35 from './Kisukari/KisukariWiki35';
import KisukariWiki36 from './Kisukari/KisukariWiki36';
import KisukariWiki37 from './Kisukari/KisukariWiki37';
import KisukariWiki38 from './Kisukari/KisukariWiki38';
import KisukariWiki39 from './Kisukari/KisukariWiki39';
import KisukariWiki40 from './Kisukari/KisukariWiki40';
import KisukariWiki41 from './Kisukari/KisukariWiki41';
import KisukariWiki42 from './Kisukari/KisukariWiki42';
import KisukariWiki43 from './Kisukari/KisukariWiki43';
import KisukariWiki44 from './Kisukari/KisukariWiki44';
import KisukariWiki45 from './Kisukari/KisukariWiki45';














import HivWiki1 from './Hiv/HivWiki1';
import HivWiki2 from './Hiv/HivWiki2';
import HivWiki3 from './Hiv/HivWiki3';
import HivWiki4 from './Hiv/HivWiki4';
import HivWiki5 from './Hiv/HivWiki5';
import HivWiki6 from './Hiv/HivWiki6';
import HivWiki7 from './Hiv/HivWiki7';
import HivWiki8 from './Hiv/HivWiki8';
import HivWiki9 from './Hiv/HivWiki9';
import HivWiki10 from './Hiv/HivWiki10';
import HivWiki11 from './Hiv/HivWiki11';
import HivWiki12 from './Hiv/HivWiki12';
import HivWiki13 from './Hiv/HivWiki13';
import HivWiki14 from './Hiv/HivWiki14';
import HivWiki15 from './Hiv/HivWiki15';
import HivWiki16 from './Hiv/HivWiki16';
import HivWiki17 from './Hiv/HivWiki17';
import HivWiki18 from './Hiv/HivWiki18';
import HivWiki19 from './Hiv/HivWiki19';
import HivWiki20 from './Hiv/HivWiki20';
import HivWiki21 from './Hiv/HivWiki21';
import HivWiki22 from './Hiv/HivWiki22';
import HivWiki23 from './Hiv/HivWiki23';
import HivWiki24 from './Hiv/HivWiki24';
import HivWiki25 from './Hiv/HivWiki25';
import HivWiki26 from './Hiv/HivWiki26';
import HivWiki27 from './Hiv/HivWiki27';
import HivWiki28 from './Hiv/HivWiki28';
import HivWiki29 from './Hiv/HivWiki29';
import HivWiki30 from './Hiv/HivWiki30';
import HivWiki31 from './Hiv/HivWiki31';
import HivWiki32 from './Hiv/HivWiki32';
import HivWiki33 from './Hiv/HivWiki33';
import HivWiki34 from './Hiv/HivWiki34';
import HivWiki35 from './Hiv/HivWiki35';
import HivWiki36 from './Hiv/HivWiki36';
import HivWiki37 from './Hiv/HivWiki37';
import HivWiki38 from './Hiv/HivWiki38';
import HivWiki39 from './Hiv/HivWiki39';
import HivWiki40 from './Hiv/HivWiki40';
import HivWiki41 from './Hiv/HivWiki41';
import HivWiki42 from './Hiv/HivWiki42';
import HivWiki43 from './Hiv/HivWiki43';
import HivWiki44 from './Hiv/HivWiki44';
import HivWiki45 from './Hiv/HivWiki45';


import UzitoZaidiWiki1 from './UzitoZaidi/UzitoZaidiWiki1';
import UzitoZaidiWiki2 from './UzitoZaidi/UzitoZaidiWiki2';
import UzitoZaidiWiki3 from './UzitoZaidi/UzitoZaidiWiki3';
import UzitoZaidiWiki4 from './UzitoZaidi/UzitoZaidiWiki4';
import UzitoZaidiWiki5 from './UzitoZaidi/UzitoZaidiWiki5';
import UzitoZaidiWiki6 from './UzitoZaidi/UzitoZaidiWiki6';
import UzitoZaidiWiki7 from './UzitoZaidi/UzitoZaidiWiki7';
import UzitoZaidiWiki8 from './UzitoZaidi/UzitoZaidiWiki8';
import UzitoZaidiWiki9 from './UzitoZaidi/UzitoZaidiWiki9';
import UzitoZaidiWiki10 from './UzitoZaidi/UzitoZaidiWiki10';
import UzitoZaidiWiki11 from './UzitoZaidi/UzitoZaidiWiki11';
import UzitoZaidiWiki12 from './UzitoZaidi/UzitoZaidiWiki12';
import UzitoZaidiWiki13 from './UzitoZaidi/UzitoZaidiWiki13';
import UzitoZaidiWiki14 from './UzitoZaidi/UzitoZaidiWiki14';
import UzitoZaidiWiki15 from './UzitoZaidi/UzitoZaidiWiki15';
import UzitoZaidiWiki16 from './UzitoZaidi/UzitoZaidiWiki16';
import UzitoZaidiWiki17 from './UzitoZaidi/UzitoZaidiWiki17';
import UzitoZaidiWiki18 from './UzitoZaidi/UzitoZaidiWiki18';
import UzitoZaidiWiki19 from './UzitoZaidi/UzitoZaidiWiki19';
import UzitoZaidiWiki20 from './UzitoZaidi/UzitoZaidiWiki20';
import UzitoZaidiWiki21 from './UzitoZaidi/UzitoZaidiWiki21';
import UzitoZaidiWiki22 from './UzitoZaidi/UzitoZaidiWiki22';
import UzitoZaidiWiki23 from './UzitoZaidi/UzitoZaidiWiki23';
import UzitoZaidiWiki24 from './UzitoZaidi/UzitoZaidiWiki24';
import UzitoZaidiWiki25 from './UzitoZaidi/UzitoZaidiWiki25';
import UzitoZaidiWiki26 from './UzitoZaidi/UzitoZaidiWiki26';
import UzitoZaidiWiki27 from './UzitoZaidi/UzitoZaidiWiki27';
import UzitoZaidiWiki28 from './UzitoZaidi/UzitoZaidiWiki28';
import UzitoZaidiWiki29 from './UzitoZaidi/UzitoZaidiWiki29';
import UzitoZaidiWiki30 from './UzitoZaidi/UzitoZaidiWiki30';
import UzitoZaidiWiki31 from './UzitoZaidi/UzitoZaidiWiki31';
import UzitoZaidiWiki32 from './UzitoZaidi/UzitoZaidiWiki32';
import UzitoZaidiWiki33 from './UzitoZaidi/UzitoZaidiWiki33';
import UzitoZaidiWiki34 from './UzitoZaidi/UzitoZaidiWiki34';
import UzitoZaidiWiki35 from './UzitoZaidi/UzitoZaidiWiki35';
import UzitoZaidiWiki36 from './UzitoZaidi/UzitoZaidiWiki36';
import UzitoZaidiWiki37 from './UzitoZaidi/UzitoZaidiWiki37';
import UzitoZaidiWiki38 from './UzitoZaidi/UzitoZaidiWiki38';
import UzitoZaidiWiki39 from './UzitoZaidi/UzitoZaidiWiki39';
import UzitoZaidiWiki40 from './UzitoZaidi/UzitoZaidiWiki40';
import UzitoZaidiWiki41 from './UzitoZaidi/UzitoZaidiWiki41';
import UzitoZaidiWiki42 from './UzitoZaidi/UzitoZaidiWiki42';
import UzitoZaidiWiki43 from './UzitoZaidi/UzitoZaidiWiki43';
import UzitoZaidiWiki44 from './UzitoZaidi/UzitoZaidiWiki44';
import UzitoZaidiWiki45 from './UzitoZaidi/UzitoZaidiWiki45';



import FamiliaWiki1 from './Familia/FamiliaWiki1';
import FamiliaWiki2 from './Familia/FamiliaWiki2';
import FamiliaWiki3 from './Familia/FamiliaWiki3';
import FamiliaWiki4 from './Familia/FamiliaWiki4';
import FamiliaWiki5 from './Familia/FamiliaWiki5';
import FamiliaWiki6 from './Familia/FamiliaWiki6';
import FamiliaWiki7 from './Familia/FamiliaWiki7';
import FamiliaWiki8 from './Familia/FamiliaWiki8';
import FamiliaWiki9 from './Familia/FamiliaWiki9';
import FamiliaWiki10 from './Familia/FamiliaWiki10';
import FamiliaWiki11 from './Familia/FamiliaWiki11';
import FamiliaWiki12 from './Familia/FamiliaWiki12';
import FamiliaWiki13 from './Familia/FamiliaWiki13';
import FamiliaWiki14 from './Familia/FamiliaWiki14';
import FamiliaWiki15 from './Familia/FamiliaWiki15';
import FamiliaWiki16 from './Familia/FamiliaWiki16';
import FamiliaWiki17 from './Familia/FamiliaWiki17';
import FamiliaWiki18 from './Familia/FamiliaWiki18';
import FamiliaWiki19 from './Familia/FamiliaWiki19';
import FamiliaWiki20 from './Familia/FamiliaWiki20';
import FamiliaWiki21 from './Familia/FamiliaWiki21';
import FamiliaWiki22 from './Familia/FamiliaWiki22';
import FamiliaWiki23 from './Familia/FamiliaWiki23';
import FamiliaWiki24 from './Familia/FamiliaWiki24';
import FamiliaWiki25 from './Familia/FamiliaWiki25';
import FamiliaWiki26 from './Familia/FamiliaWiki26';
import FamiliaWiki27 from './Familia/FamiliaWiki27';
import FamiliaWiki28 from './Familia/FamiliaWiki28';
import FamiliaWiki29 from './Familia/FamiliaWiki29';
import FamiliaWiki30 from './Familia/FamiliaWiki30';
import FamiliaWiki31 from './Familia/FamiliaWiki31';
import FamiliaWiki32 from './Familia/FamiliaWiki32';
import FamiliaWiki33 from './Familia/FamiliaWiki33';
import FamiliaWiki34 from './Familia/FamiliaWiki34';
import FamiliaWiki35 from './Familia/FamiliaWiki35';
import FamiliaWiki36 from './Familia/FamiliaWiki36';
import FamiliaWiki37 from './Familia/FamiliaWiki37';
import FamiliaWiki38 from './Familia/FamiliaWiki38';
import FamiliaWiki39 from './Familia/FamiliaWiki39';
import FamiliaWiki40 from './Familia/FamiliaWiki40';
import FamiliaWiki41 from './Familia/FamiliaWiki41';
import FamiliaWiki42 from './Familia/FamiliaWiki42';
import FamiliaWiki43 from './Familia/FamiliaWiki43';
import FamiliaWiki44 from './Familia/FamiliaWiki44';
import FamiliaWiki45 from './Familia/FamiliaWiki45';


import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect, useContext} from 'react';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function TabNavigator() {
  return (


    <>



       <Tab.Navigator
    initialRouteName="Home Tab"
          screenOptions={({route}) =>({
        headerShown:true,
        tabBarShowLabel:false,
        tabBarStyle:{
          backgroundColor:"yellow",
           height:70,


        },
        // tabBarActiveTintColor: 'blue',
        // tabBarInactiveTintColor: 'white',
       
        

      })}
      >



        <Tab.Screen
      name="Profile Tab"
      component={ProfileScreen}
     options={ ({route}) => ({ 

         tabBarIcon: ({focused}) => (
            <FontAwesome5  
            name="user-circle"
            size={focused ? 35 :35}
            color={focused ? 'green' : 'black'}

            />

            ),
           
             header: () => null,

              })}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='Smart Invigilation App' />,
      //     })}
      />




      
      <Tab.Screen
      name="Home Tab"
      component={StackNavigator}
      options={ ({route}) => ({ 
         tabBarIcon: ({focused}) => (
            <FontAwesome5  
            name="home"
            size={focused ? 35 :35}
            color={focused ? 'green' : 'black'}

            />

            ),
           header: () => <MainHeader  />,

                  })}

      
  
      />


       <Tab.Screen
      name="About Tab"
      component={AboutScreen}
      options={ ({route}) => ({ 

         tabBarIcon: ({focused}) => (
            <AntDesign  
            name="exclamationcircleo"
            size={focused ? 35 :35}
            color={focused ? 'green' : 'black'}

            />

            ),
           
             header: () => null,

              })}
      // options={ () => ({ 
      //       header: () => null,
            // })}
      />




</Tab.Navigator>

</>


    )
}
















function StackNavigator() {


  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);
  
  useEffect(() => {
    async function check(){

     const appData = await AsyncStorage.getItem('isAppFirstLaunched');
    console.log(appData);
    if (appData == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem('isAppFirstLaunched', 'false');
    }else {
      setIsAppFirstLaunched(false);
    }



    }
    check()
   
  }, []);

  return (

    isAppFirstLaunched != null &&(


      <Stack.Navigator
    // initialRouteName="Onboarding Stack"
      screenOptions={{
        headerShown:false,
        headerStyle:{
          backgroundColor:"green",
           //height:100,

        },
        headerTintColor:"white",
        headerTitleStyle: {
              fontWeight: 'bold',
            },
      }}
      >

 {isAppFirstLaunched && (
      <Stack.Screen
      name="Onboarding Stack"
      component={OnboardingScreen}
      
      />
)}
          <Stack.Screen
      name="Signin Stack"
      component={Login}


      
      />

 <Stack.Screen
      name="Home Stack"
      component={HomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

     


  <Stack.Screen
      name="Signup Stack"
      component={Signup}
      
      />


      
     




      <Stack.Screen
      name="View Detail Stack"
      component={ViewDetailScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />




 <Stack.Screen
      name="LISHE"
      component={LisheScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="ELIMU YA LISHE"
      component={ElimuLisheScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />



<Stack.Screen
      name="BIDHAA ZETU"
      component={BidhaaZetuScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

















       <Stack.Screen
      name="WATOTO"
      component={WatotoHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='WATOTO' />,
      //     })}
      />


        <Stack.Screen
      name="Watoto Day one"
      component={WatotoDayOneScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />




  <Stack.Screen
      name="Watoto Day two"
      component={WatotoDayTwoScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Watoto Day three"
      component={WatotoDayThreeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Watoto Day four"
      component={WatotoDayFourScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />



<Stack.Screen
      name="Watoto Day five"
      component={WatotoDayFiveScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />



      <Stack.Screen
      name="Watoto Day six"
      component={WatotoDaySixScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


      <Stack.Screen
      name="Watoto Day seven"
      component={WatotoDaySevenScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />







 <Stack.Screen
      name="Watoto Wiki 1"
      component={WatotoWiki1}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Watoto Wiki 2"
      component={WatotoWiki2}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Watoto Wiki 3"
      component={WatotoWiki3}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Watoto Wiki 4"
      component={WatotoWiki4}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Watoto Wiki 5"
      component={WatotoWiki5}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Watoto Wiki 6"
      component={WatotoWiki6}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Watoto Wiki 7"
      component={WatotoWiki7}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Watoto Wiki 8"
      component={WatotoWiki8}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Watoto Wiki 9"
      component={WatotoWiki9}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Watoto Wiki 10"
      component={WatotoWiki10}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Watoto Wiki 11"
      component={WatotoWiki11}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Watoto Wiki 12"
      component={WatotoWiki12}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


  <Stack.Screen
      name="Watoto Wiki 13"
      component={WatotoWiki13}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Watoto Wiki 14"
      component={WatotoWiki14}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Watoto Wiki 15"
      component={WatotoWiki15}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Watoto Wiki 16"
      component={WatotoWiki16}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Watoto Wiki 17"
      component={WatotoWiki17}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Watoto Wiki 18"
      component={WatotoWiki18}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Watoto Wiki 19"
      component={WatotoWiki19}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Watoto Wiki 20"
      component={WatotoWiki20}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Watoto Wiki 21"
      component={WatotoWiki21}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Watoto Wiki 22"
      component={WatotoWiki22}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

  <Stack.Screen
      name="Watoto Wiki 23"
      component={WatotoWiki23}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Watoto Wiki 24"
      component={WatotoWiki24}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Watoto Wiki 25"
      component={WatotoWiki25}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Watoto Wiki 26"
      component={WatotoWiki26}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

  <Stack.Screen
      name="Watoto Wiki 27"
      component={WatotoWiki27}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Watoto Wiki 28"
      component={WatotoWiki28}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Watoto Wiki 29"
      component={WatotoWiki29}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Watoto Wiki 30"
      component={WatotoWiki30}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Watoto Wiki 31"
      component={WatotoWiki31}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Watoto Wiki 32"
      component={WatotoWiki32}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Watoto Wiki 33"
      component={WatotoWiki33}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Watoto Wiki 34"
      component={WatotoWiki34}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Watoto Wiki 35"
      component={WatotoWiki35}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Watoto Wiki 36"
      component={WatotoWiki36}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Watoto Wiki 37"
      component={WatotoWiki37}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Watoto Wiki 38"
      component={WatotoWiki38}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Watoto Wiki 39"
      component={WatotoWiki39}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Watoto Wiki 40"
      component={WatotoWiki40}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Watoto Wiki 41"
      component={WatotoWiki41}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Watoto Wiki 42"
      component={WatotoWiki42}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Watoto Wiki 43"
      component={WatotoWiki43}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Watoto Wiki 44"
      component={WatotoWiki44}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

  <Stack.Screen
      name="Watoto Wiki 45"
      component={WatotoWiki45}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />












 <Stack.Screen
      name="FAMILIA"
      component={FamiliaHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />



        <Stack.Screen
      name="Familia Day one"
      component={FamiliaDayOneScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />




  <Stack.Screen
      name="Familia Day two"
      component={FamiliaDayTwoScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Familia Day three"
      component={FamiliaDayThreeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Familia Day four"
      component={FamiliaDayFourScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />



<Stack.Screen
      name="Familia Day five"
      component={FamiliaDayFiveScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />



      <Stack.Screen
      name="Familia Day six"
      component={FamiliaDaySixScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


      <Stack.Screen
      name="Familia Day seven"
      component={FamiliaDaySevenScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />








 <Stack.Screen
      name="Familia Wiki 1"
      component={FamiliaWiki1}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Familia Wiki 2"
      component={FamiliaWiki2}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Familia Wiki 3"
      component={FamiliaWiki3}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Familia Wiki 4"
      component={FamiliaWiki4}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Familia Wiki 5"
      component={FamiliaWiki5}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Familia Wiki 6"
      component={FamiliaWiki6}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Familia Wiki 7"
      component={FamiliaWiki7}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Familia Wiki 8"
      component={FamiliaWiki8}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Familia Wiki 9"
      component={FamiliaWiki9}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Familia Wiki 10"
      component={FamiliaWiki10}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Familia Wiki 11"
      component={FamiliaWiki11}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Familia Wiki 12"
      component={FamiliaWiki12}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


  <Stack.Screen
      name="Familia Wiki 13"
      component={FamiliaWiki13}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Familia Wiki 14"
      component={FamiliaWiki14}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Familia Wiki 15"
      component={FamiliaWiki15}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Familia Wiki 16"
      component={FamiliaWiki16}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Familia Wiki 17"
      component={FamiliaWiki17}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Familia Wiki 18"
      component={FamiliaWiki18}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Familia Wiki 19"
      component={FamiliaWiki19}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Familia Wiki 20"
      component={FamiliaWiki20}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Familia Wiki 21"
      component={FamiliaWiki21}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Familia Wiki 22"
      component={FamiliaWiki22}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

  <Stack.Screen
      name="Familia Wiki 23"
      component={FamiliaWiki23}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Familia Wiki 24"
      component={FamiliaWiki24}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Familia Wiki 25"
      component={FamiliaWiki25}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Familia Wiki 26"
      component={FamiliaWiki26}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

  <Stack.Screen
      name="Familia Wiki 27"
      component={FamiliaWiki27}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Familia Wiki 28"
      component={FamiliaWiki28}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Familia Wiki 29"
      component={FamiliaWiki29}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Familia Wiki 30"
      component={FamiliaWiki30}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Familia Wiki 31"
      component={FamiliaWiki31}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Familia Wiki 32"
      component={FamiliaWiki32}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Familia Wiki 33"
      component={FamiliaWiki33}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Familia Wiki 34"
      component={FamiliaWiki34}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Familia Wiki 35"
      component={FamiliaWiki35}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Familia Wiki 36"
      component={FamiliaWiki36}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Familia Wiki 37"
      component={FamiliaWiki37}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Familia Wiki 38"
      component={FamiliaWiki38}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Familia Wiki 39"
      component={FamiliaWiki39}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Familia Wiki 40"
      component={FamiliaWiki40}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Familia Wiki 41"
      component={FamiliaWiki41}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Familia Wiki 42"
      component={FamiliaWiki42}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Familia Wiki 43"
      component={FamiliaWiki43}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Familia Wiki 44"
      component={FamiliaWiki44}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

  <Stack.Screen
      name="Familia Wiki 45"
      component={FamiliaWiki45}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />
















     <Stack.Screen
      name="KISUKARI"
      component={KisukariHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />





        <Stack.Screen
      name="Kisukari Day one"
      component={KisukariDayOneScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />




  <Stack.Screen
      name="Kisukari Day two"
      component={KisukariDayTwoScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Kisukari Day three"
      component={KisukariDayThreeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Kisukari Day four"
      component={KisukariDayFourScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />



<Stack.Screen
      name="Kisukari Day five"
      component={KisukariDayFiveScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />



      <Stack.Screen
      name="Kisukari Day six"
      component={KisukariDaySixScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


      <Stack.Screen
      name="Kisukari Day seven"
      component={KisukariDaySevenScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />












 <Stack.Screen
      name="Kisukari Wiki 1"
      component={KisukariWiki1}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Kisukari Wiki 2"
      component={KisukariWiki2}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Kisukari Wiki 3"
      component={KisukariWiki3}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Kisukari Wiki 4"
      component={KisukariWiki4}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Kisukari Wiki 5"
      component={KisukariWiki5}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Kisukari Wiki 6"
      component={KisukariWiki6}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Kisukari Wiki 7"
      component={KisukariWiki7}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Kisukari Wiki 8"
      component={KisukariWiki8}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Kisukari Wiki 9"
      component={KisukariWiki9}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Kisukari Wiki 10"
      component={KisukariWiki10}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Kisukari Wiki 11"
      component={KisukariWiki11}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Kisukari Wiki 12"
      component={KisukariWiki12}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


  <Stack.Screen
      name="Kisukari Wiki 13"
      component={KisukariWiki13}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Kisukari Wiki 14"
      component={KisukariWiki14}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Kisukari Wiki 15"
      component={KisukariWiki15}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Kisukari Wiki 16"
      component={KisukariWiki16}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Kisukari Wiki 17"
      component={KisukariWiki17}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Kisukari Wiki 18"
      component={KisukariWiki18}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Kisukari Wiki 19"
      component={KisukariWiki19}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Kisukari Wiki 20"
      component={KisukariWiki20}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Kisukari Wiki 21"
      component={KisukariWiki21}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Kisukari Wiki 22"
      component={KisukariWiki22}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

  <Stack.Screen
      name="Kisukari Wiki 23"
      component={KisukariWiki23}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Kisukari Wiki 24"
      component={KisukariWiki24}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Kisukari Wiki 25"
      component={KisukariWiki25}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Kisukari Wiki 26"
      component={KisukariWiki26}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

  <Stack.Screen
      name="Kisukari Wiki 27"
      component={KisukariWiki27}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Kisukari Wiki 28"
      component={KisukariWiki28}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Kisukari Wiki 29"
      component={KisukariWiki29}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Kisukari Wiki 30"
      component={KisukariWiki30}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Kisukari Wiki 31"
      component={KisukariWiki31}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Kisukari Wiki 32"
      component={KisukariWiki32}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Kisukari Wiki 33"
      component={KisukariWiki33}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Kisukari Wiki 34"
      component={KisukariWiki34}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Kisukari Wiki 35"
      component={KisukariWiki35}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Kisukari Wiki 36"
      component={KisukariWiki36}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Kisukari Wiki 37"
      component={KisukariWiki37}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Kisukari Wiki 38"
      component={KisukariWiki38}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Kisukari Wiki 39"
      component={KisukariWiki39}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Kisukari Wiki 40"
      component={KisukariWiki40}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Kisukari Wiki 41"
      component={KisukariWiki41}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Kisukari Wiki 42"
      component={KisukariWiki42}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Kisukari Wiki 43"
      component={KisukariWiki43}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Kisukari Wiki 44"
      component={KisukariWiki44}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

  <Stack.Screen
      name="Kisukari Wiki 45"
      component={KisukariWiki45}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />














    
      <Stack.Screen
      name="HIV"
      component={HivHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />





        <Stack.Screen
      name="Hiv Day one"
      component={HivDayOneScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />




  <Stack.Screen
      name="Hiv Day two"
      component={HivDayTwoScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Hiv Day three"
      component={HivDayThreeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Hiv Day four"
      component={HivDayFourScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />



<Stack.Screen
      name="Hiv Day five"
      component={HivDayFiveScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />



      <Stack.Screen
      name="Hiv Day six"
      component={HivDaySixScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


      <Stack.Screen
      name="Hiv Day seven"
      component={HivDaySevenScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />






 <Stack.Screen
      name="Hiv Wiki 1"
      component={HivWiki1}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Hiv Wiki 2"
      component={HivWiki2}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Hiv Wiki 3"
      component={HivWiki3}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Hiv Wiki 4"
      component={HivWiki4}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Hiv Wiki 5"
      component={HivWiki5}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Hiv Wiki 6"
      component={HivWiki6}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Hiv Wiki 7"
      component={HivWiki7}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Hiv Wiki 8"
      component={HivWiki8}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Hiv Wiki 9"
      component={HivWiki9}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Hiv Wiki 10"
      component={HivWiki10}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Hiv Wiki 11"
      component={HivWiki11}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Hiv Wiki 12"
      component={HivWiki12}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


  <Stack.Screen
      name="Hiv Wiki 13"
      component={HivWiki13}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Hiv Wiki 14"
      component={HivWiki14}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Hiv Wiki 15"
      component={HivWiki15}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Hiv Wiki 16"
      component={HivWiki16}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Hiv Wiki 17"
      component={HivWiki17}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Hiv Wiki 18"
      component={HivWiki18}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Hiv Wiki 19"
      component={HivWiki19}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Hiv Wiki 20"
      component={HivWiki20}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Hiv Wiki 21"
      component={HivWiki21}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Hiv Wiki 22"
      component={HivWiki22}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

  <Stack.Screen
      name="Hiv Wiki 23"
      component={HivWiki23}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Hiv Wiki 24"
      component={HivWiki24}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Hiv Wiki 25"
      component={HivWiki25}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Hiv Wiki 26"
      component={HivWiki26}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

  <Stack.Screen
      name="Hiv Wiki 27"
      component={HivWiki27}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Hiv Wiki 28"
      component={HivWiki28}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Hiv Wiki 29"
      component={HivWiki29}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Hiv Wiki 30"
      component={HivWiki30}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Hiv Wiki 31"
      component={HivWiki31}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Hiv Wiki 32"
      component={HivWiki32}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Hiv Wiki 33"
      component={HivWiki33}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Hiv Wiki 34"
      component={HivWiki34}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Hiv Wiki 35"
      component={HivWiki35}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Hiv Wiki 36"
      component={HivWiki36}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Hiv Wiki 37"
      component={HivWiki37}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Hiv Wiki 38"
      component={HivWiki38}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Hiv Wiki 39"
      component={HivWiki39}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Hiv Wiki 40"
      component={HivWiki40}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Hiv Wiki 41"
      component={HivWiki41}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Hiv Wiki 42"
      component={HivWiki42}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Hiv Wiki 43"
      component={HivWiki43}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Hiv Wiki 44"
      component={HivWiki44}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

  <Stack.Screen
      name="Hiv Wiki 45"
      component={HivWiki45}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />












       <Stack.Screen
      name="WAJAWAZITO"
      component={WajawazitoHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />




        <Stack.Screen
      name="Wajawazito Day one"
      component={WajawazitoDayOneScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />




  <Stack.Screen
      name="Wajawazito Day two"
      component={WajawazitoDayTwoScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Wajawazito Day three"
      component={WajawazitoDayThreeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Wajawazito Day four"
      component={WajawazitoDayFourScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />



<Stack.Screen
      name="Wajawazito Day five"
      component={WajawazitoDayFiveScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />



      <Stack.Screen
      name="Wajawazito Day six"
      component={WajawazitoDaySixScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


      <Stack.Screen
      name="Wajawazito Day seven"
      component={WajawazitoDaySevenScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />




 <Stack.Screen
      name="Wajawazito Wiki 1"
      component={WajawazitoWiki1}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Wajawazito Wiki 2"
      component={WajawazitoWiki2}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Wajawazito Wiki 3"
      component={WajawazitoWiki3}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Wajawazito Wiki 4"
      component={WajawazitoWiki4}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Wajawazito Wiki 5"
      component={WajawazitoWiki5}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Wajawazito Wiki 6"
      component={WajawazitoWiki6}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Wajawazito Wiki 7"
      component={WajawazitoWiki7}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Wajawazito Wiki 8"
      component={WajawazitoWiki8}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Wajawazito Wiki 9"
      component={WajawazitoWiki9}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Wajawazito Wiki 10"
      component={WajawazitoWiki10}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Wajawazito Wiki 11"
      component={WajawazitoWiki11}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Wajawazito Wiki 12"
      component={WajawazitoWiki12}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


  <Stack.Screen
      name="Wajawazito Wiki 13"
      component={WajawazitoWiki13}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Wajawazito Wiki 14"
      component={WajawazitoWiki14}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Wajawazito Wiki 15"
      component={WajawazitoWiki15}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Wajawazito Wiki 16"
      component={WajawazitoWiki16}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Wajawazito Wiki 17"
      component={WajawazitoWiki17}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Wajawazito Wiki 18"
      component={WajawazitoWiki18}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Wajawazito Wiki 19"
      component={WajawazitoWiki19}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Wajawazito Wiki 20"
      component={WajawazitoWiki20}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Wajawazito Wiki 21"
      component={WajawazitoWiki21}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Wajawazito Wiki 22"
      component={WajawazitoWiki22}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

  <Stack.Screen
      name="Wajawazito Wiki 23"
      component={WajawazitoWiki23}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Wajawazito Wiki 24"
      component={WajawazitoWiki24}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Wajawazito Wiki 25"
      component={WajawazitoWiki25}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Wajawazito Wiki 26"
      component={WajawazitoWiki26}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

  <Stack.Screen
      name="Wajawazito Wiki 27"
      component={WajawazitoWiki27}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Wajawazito Wiki 28"
      component={WajawazitoWiki28}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Wajawazito Wiki 29"
      component={WajawazitoWiki29}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Wajawazito Wiki 30"
      component={WajawazitoWiki30}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Wajawazito Wiki 31"
      component={WajawazitoWiki31}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Wajawazito Wiki 32"
      component={WajawazitoWiki32}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Wajawazito Wiki 33"
      component={WajawazitoWiki33}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Wajawazito Wiki 34"
      component={WajawazitoWiki34}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Wajawazito Wiki 35"
      component={WajawazitoWiki35}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Wajawazito Wiki 36"
      component={WajawazitoWiki36}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Wajawazito Wiki 37"
      component={WajawazitoWiki37}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Wajawazito Wiki 38"
      component={WajawazitoWiki38}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Wajawazito Wiki 39"
      component={WajawazitoWiki39}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Wajawazito Wiki 40"
      component={WajawazitoWiki40}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Wajawazito Wiki 41"
      component={WajawazitoWiki41}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Wajawazito Wiki 42"
      component={WajawazitoWiki42}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="Wajawazito Wiki 43"
      component={WajawazitoWiki43}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="Wajawazito Wiki 44"
      component={WajawazitoWiki44}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

  <Stack.Screen
      name="Wajawazito Wiki 45"
      component={WajawazitoWiki45}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />






       <Stack.Screen
      name="UZITO ZAIDI"
      component={UzitoZaidiHomeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />




        <Stack.Screen
      name="UzitoZaidi Day one"
      component={UzitoZaidiDayOneScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />




  <Stack.Screen
      name="UzitoZaidi Day two"
      component={UzitoZaidiDayTwoScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="UzitoZaidi Day three"
      component={UzitoZaidiDayThreeScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="UzitoZaidi Day four"
      component={UzitoZaidiDayFourScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />



<Stack.Screen
      name="UzitoZaidi Day five"
      component={UzitoZaidiDayFiveScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />



      <Stack.Screen
      name="UzitoZaidi Day six"
      component={UzitoZaidiDaySixScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


      <Stack.Screen
      name="UzitoZaidi Day seven"
      component={UzitoZaidiDaySevenScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />




 <Stack.Screen
      name="UzitoZaidi Wiki 1"
      component={UzitoZaidiWiki1}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="UzitoZaidi Wiki 2"
      component={UzitoZaidiWiki2}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="UzitoZaidi Wiki 3"
      component={UzitoZaidiWiki3}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="UzitoZaidi Wiki 4"
      component={UzitoZaidiWiki4}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="UzitoZaidi Wiki 5"
      component={UzitoZaidiWiki5}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="UzitoZaidi Wiki 6"
      component={UzitoZaidiWiki6}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="UzitoZaidi Wiki 7"
      component={UzitoZaidiWiki7}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="UzitoZaidi Wiki 8"
      component={UzitoZaidiWiki8}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="UzitoZaidi Wiki 9"
      component={UzitoZaidiWiki9}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="UzitoZaidi Wiki 10"
      component={UzitoZaidiWiki10}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="UzitoZaidi Wiki 11"
      component={UzitoZaidiWiki11}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="UzitoZaidi Wiki 12"
      component={UzitoZaidiWiki12}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


  <Stack.Screen
      name="UzitoZaidi Wiki 13"
      component={UzitoZaidiWiki13}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="UzitoZaidi Wiki 14"
      component={UzitoZaidiWiki14}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="UzitoZaidi Wiki 15"
      component={UzitoZaidiWiki15}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="UzitoZaidi Wiki 16"
      component={UzitoZaidiWiki16}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="UzitoZaidi Wiki 17"
      component={UzitoZaidiWiki17}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="UzitoZaidi Wiki 18"
      component={UzitoZaidiWiki18}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="UzitoZaidi Wiki 19"
      component={UzitoZaidiWiki19}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="UzitoZaidi Wiki 20"
      component={UzitoZaidiWiki20}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="UzitoZaidi Wiki 21"
      component={UzitoZaidiWiki21}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="UzitoZaidi Wiki 22"
      component={UzitoZaidiWiki22}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

  <Stack.Screen
      name="UzitoZaidi Wiki 23"
      component={UzitoZaidiWiki23}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="UzitoZaidi Wiki 24"
      component={UzitoZaidiWiki24}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="UzitoZaidi Wiki 25"
      component={UzitoZaidiWiki25}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="UzitoZaidi Wiki 26"
      component={UzitoZaidiWiki26}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

  <Stack.Screen
      name="UzitoZaidi Wiki 27"
      component={UzitoZaidiWiki27}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="UzitoZaidi Wiki 28"
      component={UzitoZaidiWiki28}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="UzitoZaidi Wiki 29"
      component={UzitoZaidiWiki29}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="UzitoZaidi Wiki 30"
      component={UzitoZaidiWiki30}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="UzitoZaidi Wiki 31"
      component={UzitoZaidiWiki31}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="UzitoZaidi Wiki 32"
      component={UzitoZaidiWiki32}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="UzitoZaidi Wiki 33"
      component={UzitoZaidiWiki33}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="UzitoZaidi Wiki 34"
      component={UzitoZaidiWiki34}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="UzitoZaidi Wiki 35"
      component={UzitoZaidiWiki35}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="UzitoZaidi Wiki 36"
      component={UzitoZaidiWiki36}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="UzitoZaidi Wiki 37"
      component={UzitoZaidiWiki37}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="UzitoZaidi Wiki 38"
      component={UzitoZaidiWiki38}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="UzitoZaidi Wiki 39"
      component={UzitoZaidiWiki39}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="UzitoZaidi Wiki 40"
      component={UzitoZaidiWiki40}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="UzitoZaidi Wiki 41"
      component={UzitoZaidiWiki41}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="UzitoZaidi Wiki 42"
      component={UzitoZaidiWiki42}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

<Stack.Screen
      name="UzitoZaidi Wiki 43"
      component={UzitoZaidiWiki43}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


<Stack.Screen
      name="UzitoZaidi Wiki 44"
      component={UzitoZaidiWiki44}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />

  <Stack.Screen
      name="UzitoZaidi Wiki 45"
      component={UzitoZaidiWiki45}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />






       <Stack.Screen
      name="MAKUNDI YA CHAKULA"
      component={MakundiYaChakulaScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


        <Stack.Screen
      name="POSTER NA PICHA"
      component={PostersNaPichaScreen}
      // options={ () => ({ 
      //       headerLeft: () => <Header  title='About Page' />,
      //     })}
      />


      

</Stack.Navigator>
) 
//bano la kufunga if is first launched



    )
}








export default function MyNavigation() {

  return (
    <View style={styles.container}>
    

    
       <NavigationContainer>
       {/*
       <MainHeader/>
*/}     
<TabNavigator />
   </NavigationContainer>


    
        <StatusBar backgroundColor="lightgreen" barStyle="dark-content" />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    marginTop:30,
  },
});
