import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Text, View } from 'react-native'
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display'
import AppLoading from 'expo-app-loading'

export default function Main() {
	const [fontsLoaded] = useFonts({
		DMSans_400Regular,
		DMSerifDisplay_400Regular,
	})

	if (!fontsLoaded) {
		return <AppLoading />
	}
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<StatusBar style='auto' />
			<Text style={{ fontFamily: 'Inter_900Black', fontSize: 40 }}>
				Inter Black
			</Text>
		</View>
	)
}