import React from 'react';
import AdminLoginComponent from './Student/Login/Components/login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminSignup from './Student/Signup/Components/signup';

const App = () =>  {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Admin Login" component={AdminLoginComponent} options={{ title: 'Admin Login' }}/>
                    <Stack.Screen name="Admin Signup" component={AdminSignup} options={{ title: 'Admin Signup' }}/>
                    <Stack.Screen name="Home" component={AdminSignup} options={{ title: 'Admin Signup' }}/>
                </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
