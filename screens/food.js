import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { globals } from "../styles/globals";
import { ActivityIndicator } from "react-native";

export default function Food({ route, navigation }) {
  const [foods, setFoods] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  async function fetchMeal() {
    try {
      setIsLoaded(true);
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${route.params.strCategory}`
      );
      const data = await res.json();
      setFoods(data.meals);
      setIsLoaded(false);
    } catch (error) {
      Alert.alert(
        "Something went wrong",
        "If the problem persists, try reloading the app.",
        [
          {
            text: "Reload",
            onPress: () => fetchMeal(),
          },
          {
            text: "Close",
          },
        ]
      );
    }
  }

  useEffect(() => {
    fetchMeal();
  }, []);

  return (
    <SafeAreaView style={globals.container}>
      <ScrollView style={globals.padding} showsVerticalScrollIndicator={false}>
        {isLoaded ? (
          <ActivityIndicator size="large" color="#222" />
        ) : (
          <View style={styles.container}>
            <Text style={globals.heading}>{route.params.strCategory}</Text>
            <Text style={globals.text}>
              {route.params.strCategoryDescription}
            </Text>

            <View style={styles.cards}>
              {foods.map((food) => (
                <TouchableOpacity
                  key={food.idMeal}
                  onPress={() => navigation.navigate("SingleFood", food)}
                >
                  <View>
                    <Image
                      source={{ uri: food.strMealThumb }}
                      style={[globals.image, styles.image]}
                    />
                    <Text style={[globals.heading2, styles.mealName]}>
                      {food.strMeal}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 32,
  },
  cards: {
    marginVertical: 32,
    gap: 32,
  },
  mealName: {
    marginTop: 8,
  },
  image: {
    borderRadius: 16,
  },
});
