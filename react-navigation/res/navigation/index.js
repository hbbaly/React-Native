import { createStackNavigator, createAppContainer } from 'react-navigation'
import Index from '../views/index'
import Detail from '../views/details'
const appContainer = createStackNavigator(
  { 
    Home:{ 
      screen: Index
    },
    Detail:{ 
      screen: Detail
    }
  }
)

export default createAppContainer(appContainer)