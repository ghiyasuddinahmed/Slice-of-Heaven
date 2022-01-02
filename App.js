import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Provider } from 'react-native-paper';
import theme from './theme';
import Login from './views/login/Login';
import Signup from './views/signup/Signup';
import Menu from './views/menu/Menu';
import OrderHistory from './views/order_history/order_history';
import Contact from './views/contact/contact';
import ContactResponse from './views/contact_response/contact_response';
import { useFonts } from 'expo-font';

const Stack = createNativeStackNavigator();
export default function App() {
  const [loaded] = useFonts({
    LuxuriousRoman: require('./assets/fonts/LuxuriousRoman-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen
            name='Login'
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name='Signup'
            component={Signup}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name='Menu' component={Menu} />
          <Stack.Screen
            name='Order History'
            component={OrderHistory}
            options={{
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: theme.colors.accent,
              },
            }}
          />
          <Stack.Screen
            name='Contact'
            component={Contact}
            options={{
              headerTintColor: 'white',
              headerStyle: {
                backgroundColor: theme.colors.accent,
              },
            }}
          />
          <Stack.Screen
            name='Contact_Response'
            component={ContactResponse}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
