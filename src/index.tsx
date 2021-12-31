import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';
import theme from './theme';

const Main: React.FC = () => {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ThemeProvider theme={theme}>
        <StatusBar style="auto" />
        <Text style={{ fontFamily: 'DMSerifDisplay_400Regular', fontSize: 24 }}>
          DMSerifDisplay_400Regular
        </Text>
        <Text style={{ fontFamily: 'DMSans_400Regular', fontSize: 24 }}>
          DMSans_400Regular
        </Text>
      </ThemeProvider>
    </View>
  );
};

export default Main;
