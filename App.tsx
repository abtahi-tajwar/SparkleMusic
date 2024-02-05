import { StatusBar } from "expo-status-bar";
// Screens
import Main from "./src/screens/Main";
// Third party modules
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider } from "./src/components";
import { theme } from "./src/theme";
import { View } from "react-native";
import { useFonts, Aleo_300Light, Aleo_300Light_Italic, Aleo_400Regular, Aleo_400Regular_Italic, Aleo_700Bold, Aleo_700Bold_Italic } from '@expo-google-fonts/aleo'
// import { PaperProvider } from 'react-native-paper';
// import { theme } from './theme';

export default function App() {
  const Stack = createNativeStackNavigator();

  // // Load all fonts
  let [fontsLoaded, fontError] = useFonts({
    Aleo_300Light,
    Aleo_300Light_Italic,
    Aleo_400Regular,
    Aleo_400Regular_Italic,
    Aleo_700Bold,
    Aleo_700Bold_Italic
  });

  if (fontError) console.log("Failed to load fonts", fontError)
  return (
    <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Main} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
    </ThemeProvider>
    
  );
}
