import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/** Tabs */
import AllMusic from "../tabs/Main/AllMusic/AllMusic";
import Download from "../tabs/Main/Download/Download";
import Albums from "../tabs/Main/Albums";
import MusicScreen from "../tabs/Main/MusicScreen/MusicScreen";
/** Types */
import { RouteProp, ParamListBase } from "@react-navigation/native";
/** Icons */
import { MusicIcon, DownloadIcon, AlbumIcon, SingleMusicIcon } from "../../assets/Icons";
import { useTheme } from "../components";
import { SafeAreaView } from "react-native-safe-area-context";
import Playground from "../components/Playground/Playground";

const Tab = createBottomTabNavigator();

function Home() {
  const theme = useTheme();
  const renderTabBarIcon = (route: RouteProp<ParamListBase, string>) => {
    if (route.name === "AllMusic") {
      return <MusicIcon />;
    } else if (route.name === "Download") {
      return <DownloadIcon />;
    } else if (route.name === "Albums") {
      return <AlbumIcon />;
    } else if (route.name === "Now Playing") {
      return <SingleMusicIcon color={'white'} />
    }

    // You can return any component that you like here!
  };
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => renderTabBarIcon(route),
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          backgroundColor: "#483737",
          height: 55,
          borderTopColor: "transparent",
          fontFamily: "Aleo_400Regular",
        },
        tabBarActiveBackgroundColor: theme.colors?.primary,
        tabBarItemStyle: {
          padding: 10,
        },
      })}
    >
      <Tab.Screen
        name="AllMusic"
        component={AllMusic}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Download"
        component={Download}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Albums"
        component={Albums}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Now Playing"
        component={MusicScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default Home;

const styles = StyleSheet.create({
  body: {
    backgroundColor: "linear-gradient(180deg, #483737 0%, #000000 40.42%)",
  },
});
