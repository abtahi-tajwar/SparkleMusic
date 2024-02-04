import { StatusBar } from "expo-status-bar";
// Screens
import Main from "./src/screens/Main";
// Third party modules
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider } from "./src/components";
import { theme } from "./src/theme";
// import { PaperProvider } from 'react-native-paper';
// import { theme } from './theme';

export default function App() {
  const Stack = createNativeStackNavigator();
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
