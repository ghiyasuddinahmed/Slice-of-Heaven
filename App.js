import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Provider } from "react-native-paper";
import theme from "./theme";

import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Menu from "./components/menu/Menu";
import OrderHistory from "./components/order_history/order_history";
import Contact from "./components/contact/contact";
import ContactResponse from "./components/contact_response/contact_response";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Order History">
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
            name="Order History"
            component={OrderHistory}
            options={{
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: theme.colors.accent,
              },
            }}
          />
          <Stack.Screen
            name="Contact"
            component={Contact}
            options={{
              headerTintColor: "white",
              headerStyle: {
                backgroundColor: theme.colors.accent,
              },
            }}
          />
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
