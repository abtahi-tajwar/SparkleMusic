import { StatusBar } from "expo-status-bar";
// Screens
// import Main from "./src/screens/Main";
// Third party modules
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider } from "./src/components";
import { theme } from "./src/theme";
import { View, Text, AppRegistry } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts, Aleo_300Light, Aleo_300Light_Italic, Aleo_400Regular, Aleo_400Regular_Italic, Aleo_700Bold, Aleo_700Bold_Italic } from '@expo-google-fonts/aleo'
import useInitialize from "./src/hooks/useInitialize";
import CustomText from "./src/atoms/Typography/CustomText";
import { Provider } from 'react-redux'
import store from "./src/redux/store";
import Main from "./src/Main";
import app from './app.json';
// import { PaperProvider } from 'react-native-paper';
// import { theme } from './theme';

export default function App() {
  return (
        <Provider store={store}>
            <Main />
        </Provider>
  );
}

// AppRegistry.registerComponent(app.expo.name, () => App)
