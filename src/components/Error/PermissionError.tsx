import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Button } from '@react-native-material/core'
import * as Linking from 'expo-linking';
import Container from '../Container';
import CustomText from '../../atoms/Typography/CustomText';
import { SafeAreaView } from 'react-native-safe-area-context';

export const PermissionError = () => {
  const handleOpenSettings = () => {
    Linking.openSettings();
  }
  return (
    <SafeAreaView>
      <Container>
        <View style={style.container}>
          <CustomText variant='700' style={{ fontSize: 22, color: 'white'}}>Enable Media Permission!</CustomText>
          <CustomText style={{ color: 'white', textAlign: 'center'}}>In your app settings, go to permissions then allow media permissions to view music </CustomText>
          <Button title="Open Settings" onPress={handleOpenSettings} />
        </View>
      </Container>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
    container: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
    }
})
