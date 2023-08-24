import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Foods from "./screens/foods";
import Food from "./screens/food";
import Singlefood from "./screens/singlefood";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useEffect } from "react";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    productsansregular: require("./assets/fonts/product-sans-regular.ttf"),
    productsansbold: require("./assets/fonts/product-sans-bold.ttf"),
  });

  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }

    prepare();
  }, []);

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  return (
    <NavigationContainer>
      <StatusBar style="light" backgroundColor="#222222" />
      <Stack.Navigator
        initialRouteName="Foods"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#222222",
          },
          headerTitleStyle: {
            fontFamily: "productsansbold",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          gestureEnabled: true,
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
