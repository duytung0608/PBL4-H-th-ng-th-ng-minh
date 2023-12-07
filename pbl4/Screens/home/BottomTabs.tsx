import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeCamera from './HomeCamera';
import Search from './Search';
import History from './History';
import Profile from './Profile';
import DetailStack from '../stacks/SearchStack';
import ProfileStack from '../stacks/ProfileStack';
import SearchStack from '../stacks/SearchStack';
import HistoryStack from '../stacks/HistoryStack';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    let activeTintColor;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home-sharp' : 'home-outline';
                        activeTintColor = focused ? '#3073D2' : 'gray';
                    } else if (route.name === 'Search') {
                        iconName = focused ? 'search-sharp' : 'search-outline';
                        activeTintColor = focused ? '#500E64' : 'gray';
                    } else if (route.name === 'History') {
                        iconName = focused ? 'alarm-sharp' : 'alarm-outline';
                        activeTintColor = focused ? '#F1B11B' : 'gray';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person-sharp' : 'person-outline';
                        activeTintColor = focused ? '#149B3C' : 'gray';
                    }

                    return <Ionicons name={iconName} size={size} color={activeTintColor} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: 'bold',
                },
            })}

            // screenOptions={({ route }) => {
            //     let tabBarLabelColor = 'gray'; // Mặc định màu chữ là gray

            //     return {
            //         tabBarIcon: ({ focused, color, size }) => {
            //             let iconName;

            //             if (route.name === 'Home') {
            //                 iconName = focused ? 'home-sharp' : 'home-outline';
            //                 tabBarLabelColor = focused ? '#3073D2' : 'gray';
            //             } else if (route.name === 'Search') {
            //                 iconName = focused ? 'search-sharp' : 'search-outline';
            //                 tabBarLabelColor = focused ? '#500E64' : 'gray';
            //             } else if (route.name === 'History') {
            //                 iconName = focused ? 'alarm-sharp' : 'alarm-outline';
            //                 tabBarLabelColor = focused ? '#F1B11B' : 'gray';
            //             } else if (route.name === 'Profile') {
            //                 iconName = focused ? 'person-sharp' : 'person-outline';
            //                 tabBarLabelColor = focused ? '#149B3C' : 'gray';
            //             }

            //             return <Ionicons name={iconName} size={size} color={tabBarLabelColor} />;
            //         },
            //         tabBarLabelStyle: {
            //             fontSize: 12,
            //             fontWeight: 'bold',
            //             color: tabBarLabelColor,
            //         },
            //     };
            // }}
        >
            <Tab.Screen name="Home" component={HomeCamera} options={{ headerShown: false }} />
            <Tab.Screen name="Search" component={SearchStack} options={{ headerShown: false }} />
            <Tab.Screen name="History" component={HistoryStack} options={{ headerShown: false }} />
            <Tab.Screen name="Profile" component={ProfileStack} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
};

export default BottomTabs;
