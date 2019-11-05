/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Redux from './Redux/ReduxApp';


AppRegistry.registerComponent(appName, () => Redux);
