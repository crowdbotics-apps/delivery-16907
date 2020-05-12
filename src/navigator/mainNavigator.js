import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile43411Navigator from '../features/UserProfile43411/navigator';
import Maps43407Navigator from '../features/Maps43407/navigator';
import Add-Item43403Navigator from '../features/Add-Item43403/navigator';
import Maps43402Navigator from '../features/Maps43402/navigator';
import UserProfile43367Navigator from '../features/UserProfile43367/navigator';
import Maps43348Navigator from '../features/Maps43348/navigator';
import Settings43326Navigator from '../features/Settings43326/navigator';
import Settings43311Navigator from '../features/Settings43311/navigator';
import NotificationList43310Navigator from '../features/NotificationList43310/navigator';
import Maps43309Navigator from '../features/Maps43309/navigator';
import Settings43294Navigator from '../features/Settings43294/navigator';
import Settings43277Navigator from '../features/Settings43277/navigator';
import Settings43260Navigator from '../features/Settings43260/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile43411: { screen: UserProfile43411Navigator },
Maps43407: { screen: Maps43407Navigator },
Add-Item43403: { screen: Add-Item43403Navigator },
Maps43402: { screen: Maps43402Navigator },
UserProfile43367: { screen: UserProfile43367Navigator },
Maps43348: { screen: Maps43348Navigator },
Settings43326: { screen: Settings43326Navigator },
Settings43311: { screen: Settings43311Navigator },
NotificationList43310: { screen: NotificationList43310Navigator },
Maps43309: { screen: Maps43309Navigator },
Settings43294: { screen: Settings43294Navigator },
Settings43277: { screen: Settings43277Navigator },
Settings43260: { screen: Settings43260Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
