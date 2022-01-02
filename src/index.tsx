import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';
import theme from './theme';
import Routes from './routes';
import WrapperGestureHandler from './components/WrapperGestureHandler';
import { AuthProvider } from './hooks/useAuth';

const Main: React.FC = () => {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <WrapperGestureHandler>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <StatusBar style="light" translucent backgroundColor="transparent" />
          <Routes />
        </ThemeProvider>
      </AuthProvider>
    </WrapperGestureHandler>
  );
};

export default Main;
