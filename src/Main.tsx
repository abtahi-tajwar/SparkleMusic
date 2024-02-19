import { StatusBar } from "expo-status-bar";
// Third party modules
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider } from "./components";
import { theme } from "./theme";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts, Aleo_300Light, Aleo_300Light_Italic, Aleo_400Regular, Aleo_400Regular_Italic, Aleo_700Bold, Aleo_700Bold_Italic } from '@expo-google-fonts/aleo'
import useInitialize from "./hooks/useInitialize";
import { Provider } from 'react-redux'
import store from "./redux/store";
import Home from "./screens/Home";
import { useMusicEvents } from "./hooks/useMusicEvents";

// import { PaperProvider } from 'react-native-paper';
// import { theme } from './theme';

export default function Main() {
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

  useInitialize();
  useMusicEvents();
  return (
    !fontsLoaded ? <SafeAreaView><Text>Loading...</Text></SafeAreaView> : (
      <NavigationContainer>
        <ThemeProvider theme={theme}>
              <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
              </Stack.Navigator>
        </ThemeProvider>
      </NavigationContainer>
    )
    
  );
}
