import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import { Provider } from 'react-native-paper';
import theme from './theme';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Login}>
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='Signup' component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
