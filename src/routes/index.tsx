/* eslint-disable @typescript-eslint/no-namespace */
import React, { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignIn from '@/screens/SignIn';
import Home from '@/screens/Home';
import Requests from '@/screens/Requests';
import MyTabBar from '@/components/MyTabBar';
import { useAuth } from '@/hooks/useAuth';
import RegisterProduct from '@/screens/RegisterProduct';

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      SignIn: undefined;
      Requests: undefined;
      Request: undefined;
      RegisterProduct: undefined;
    }
  }
}

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <MyTabBar {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ tabBarLabel: 'Cardápio' }}
      />
      <Tab.Screen
        name="Requests"
        component={Requests}
        options={{ tabBarLabel: 'Pedidos' }}
      />
    </Tab.Navigator>
  );
}

function Routes(): JSX.Element | null {
  const { changeUser, user } = useAuth();
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = useCallback(
    async (userChanged: FirebaseAuthTypes.User | null) => {
      await changeUser(userChanged);
      if (initializing) setInitializing(false);
    },
    [initializing, changeUser],
  );

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [onAuthStateChanged]);

  if (initializing) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {user && !user.isAdmin && (
          <Stack.Screen name="MyTabs" component={MyTabs} />
        )}

        {user && user.isAdmin && (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="RegisterProduct" component={RegisterProduct} />
          </>
        )}

        {!user && <Stack.Screen name="SignIn" component={SignIn} />}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
