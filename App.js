import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './component/Home';
import SearchScreen from './component/Search';
import WatchlistScreen from './component/Watchlist';
import SettingsScreen from './component/Settings';
import { ThemeProvider, useTheme } from './component/ThemeContext';

const Tab = createBottomTabNavigator();

function AppContent() {
  const { theme } = useTheme();

  const themeStyles = {
    backgroundColor: theme === 'light' ? 'white' : 'black',
    textColor: theme === 'light' ? 'black' : 'white',
    tabBarBackground: theme === 'light' ? 'white' : 'black',
    tabBarActiveTint: theme === 'light' ? 'blue' : 'lightblue',
    headerBackground: theme === 'light' ? 'white' : 'black',
    headerTintColor: theme === 'light' ? 'black' : 'white',
  };

  return (
    <View style={{ flex: 1, backgroundColor: themeStyles.backgroundColor }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Watchlist') {
              iconName = focused ? 'list' : 'list-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarLabelStyle: {
            fontSize: 12,
            marginTop: -5,
          },
          tabBarStyle: {
            height: 70,
            paddingBottom: 10,
            backgroundColor: themeStyles.tabBarBackground,
          },
          tabBarActiveTintColor: themeStyles.tabBarActiveTint,
          tabBarInactiveTintColor: 'gray',
          headerStyle: {
            backgroundColor: themeStyles.headerBackground,
          },
          headerTintColor: themeStyles.headerTintColor,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Watchlist" component={WatchlistScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </View>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <AppContent />
      </NavigationContainer>
    </ThemeProvider>
  );
}
