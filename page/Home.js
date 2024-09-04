import React from 'react';
import { View, Text } from 'react-native';
import { useTheme } from './ThemeContext';

export default function HomeScreen() {
  const { theme } = useTheme(); // ดึงสถานะธีมจาก ThemeContext

  const themeStyles = {
    backgroundColor: theme === 'light' ? 'white' : 'black',
    textColor: theme === 'light' ? 'black' : 'white',
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: themeStyles.backgroundColor }}>
      <Text style={{ color: themeStyles.textColor }}>Home</Text>
    </View>
  );
}
