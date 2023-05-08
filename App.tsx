import { StatusBar } from 'expo-status-bar';
// Screens
import Main from './screens/Main';
// Third party modules
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Main} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

// const styles = StyleSheet.create({
//   body: {
//     backgroundColor: 'linear-gradient(180deg, #483737 0%, #000000 40.42%);'
//   }
// })