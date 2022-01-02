/* eslint-disable @typescript-eslint/no-namespace */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '@/screens/SignIn';
import Home from '@/screens/Home';

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      SignIn: undefined;
      Requests: undefined;
      Request: undefined;
    }
  }
}

const Stack = createNativeStackNavigator();

function Routes(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
