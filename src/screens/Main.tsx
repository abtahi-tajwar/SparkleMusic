import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/** Tabs */
import AllMusic from '../tabs/Main/AllMusic/AllMusic';
import Download from '../tabs/Main/Download';
import Albums from '../tabs/Main/Albums';
/** Types */
import { RouteProp, ParamListBase } from '@react-navigation/native';
/** Icons */
import { MusicIcon, DownloadIcon, AlbumIcon } from '../../assets/Icons';
import { useTheme } from '../components';




const Tab = createBottomTabNavigator();

function Main() {
    const theme = useTheme();
    const renderTabBarIcon = (route: RouteProp<ParamListBase, string>) => {
        if (route.name === 'AllMusic') {
            return <MusicIcon />;
        } else if (route.name === 'Download') {
            return <DownloadIcon />
        } else if (route.name === 'Albums') {
            return <AlbumIcon />
        }

        // You can return any component that you like here!
      }
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: () => renderTabBarIcon(route),
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: '#483737',
                    height: 55,
                    borderTopColor: 'transparent'
                },
                tabBarActiveBackgroundColor: theme.colors?.primary,
                tabBarItemStyle: {
                    padding: 10,
                },
                
            })}
        >
            <Tab.Screen name='AllMusic' component={AllMusic} options={{ headerShown: false }} />
            <Tab.Screen name='Download' component={Download} options={{ headerShown: false }} />
            <Tab.Screen name='Albums' component={Albums} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

export default Main

const styles = StyleSheet.create({
    body: {
        backgroundColor: 'linear-gradient(180deg, #483737 0%, #000000 40.42%)'
    }
});