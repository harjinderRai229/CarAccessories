/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import MMKV from 'react-native-mmkv-storage';

MMKV.initialize();
AppRegistry.registerComponent(appName, () => App);
