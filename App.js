import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Foods from "./screens/foods";
import Food from "./screens/food";
import Singlefood from "./screens/singlefood";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#222222" />
      <Stack.Navigator
        initialRouteName="Foods"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#222222",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          gestureEnabled: true,
          // gestureDirection: "vertical",
          animation: "slide_from_bottom",
        }}
      >
        <Stack.Screen
          name="Foods"
          component={Foods}
          options={{
            headerTitle: "Food Palace",
          }}
        />
        <Stack.Screen
          name="Food"
          component={Food}
          options={{
            headerTitle: "",
          }}
        />
        <Stack.Screen
          name="SingleFood"
          component={Singlefood}
          options={{
            headerTitle: "How To Prepare",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
