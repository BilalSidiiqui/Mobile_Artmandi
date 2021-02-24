import { createStackNavigator} from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';
import HOME from '../screens/Home';
import LOGIN from '../screens/Login';
import SIGNUP from '../screens/Resgister';
import ONLOAD from '../screens/Onload';


const screens = {
    ONLOAD :{ screen : ONLOAD },
    HOME : { screen: HOME},
    LOGIN :{ screen : LOGIN},
    SIGNUP : {screen : SIGNUP},
}

const homestack= createStackNavigator(screens);
export default createAppContainer(homestack);