import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import KhoaScreen from './KhoaScreen';
import NganhScreen from './NganhScreen';
import KhoaHocScreen from './KhoaHocScreen';
import ChiTietKhoaHocScreen from './ChiTietKhoaHocScreen';

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="Khoa"
            screenOptions={{ headerTitleAlign: 'center', headerStyle:{backgroundColor:"#f58787"} }}
        >
        <Stack.Screen name="Khoa" component={KhoaScreen} />
        <Stack.Screen
            name="Nganh"
            component={NganhScreen}
            options={{ title: 'Ngành' }}
        />
        <Stack.Screen
            name="KhoaHoc"
            component={KhoaHocScreen}
            options={{title: 'Khoá Học'
            }}/>
        <Stack.Screen 
            name="ChiTietKhoaHoc"
            component={ChiTietKhoaHocScreen}
            options={{title: 'Chương Trình đào tạo'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default HomeScreen;