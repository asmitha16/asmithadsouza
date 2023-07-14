import React, {useEffect} from 'react'
import AuthStack from '@Navigation/AuthStack'
import { NavigationContainer } from '@react-navigation/native';
const RootNavigation = () => {
  

    return (
        /* There can be only 1 navigation container in the entire project*/
        <NavigationContainer > 
        <AuthStack />
    </NavigationContainer>
    )
}

export default RootNavigation;