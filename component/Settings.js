// component/Settings.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from './ThemeContext';

export default function SettingsScreen() {
  const { theme, toggleTheme } = useTheme();

  const themeStyles = {
    backgroundColor: theme === 'light' ? 'white' : 'black',
    textColor: theme === 'light' ? 'black' : 'white',
  };

  return (
    <View style={{ flex: 1, backgroundColor: themeStyles.backgroundColor, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: themeStyles.textColor, fontSize: 24, marginBottom: 20 }}>Settings</Text>
      <TouchableOpacity onPress={toggleTheme}>
        <Text style={{ color: themeStyles.textColor, fontSize: 18 }}>
          {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
