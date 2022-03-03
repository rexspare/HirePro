/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import App from './App';
import Splash from './src/screens/splash/Splash';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Splash);
