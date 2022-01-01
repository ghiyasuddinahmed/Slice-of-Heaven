import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider } from "react-native-paper";
import theme from "./theme";

import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Menu from "./components/menu/Menu";
import ContactResponse from "./components/contact_response/contact_response";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Contact_Response">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen
            name="Contact_Response"
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
