import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import HOME from '../screens/Home';
import LOGIN from '../screens/Login';
import SIGNUP from '../screens/Resgister';


const screens = {
    
    LOGIN : {screen:LOGIN},
    HOME : { screen:HOME},

    SIGNUP : {screen : SIGNUP},
}

const homestack= createStackNavigator(screens);
export default createAppContainer(homestack);