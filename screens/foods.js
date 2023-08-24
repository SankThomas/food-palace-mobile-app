import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { globals } from "../styles/globals";
import { ActivityIndicator } from "react-native";

const url = `https://www.themealdb.com/api/json/v1/1/categories.php`;

export default function Foods({ navigation }) {
  const [foods, setFoods] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState();

  async function fetchMeals() {
    try {
      setIsLoaded(true);
      const res = await fetch(url);
      const data = await res.json();
      setFoods(data.categories);
      setIsLoaded(false);
    } catch (error) {
      Alert.alert("Oops! Something went wrong");
    }
  }

  useEffect(() => {
    fetchMeals();
  }, []);

  async function handleSearch() {
    try {
      setIsLoaded(true);
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchText}`
      );
      const data = await res.json();
      setResults(data.meals);
      setIsLoaded(false);
      setSearchText("");
    } catch (error) {
      Alert.alert(
        "Something went wrong",
        "If the problem persists, try reloading the app.",
        [
          {
            text: "Reload",
            onPress: () => handleSearch(),
          },
          {
            text: "Close",
          },
        ]
      );
    }
  }

  return (
    <SafeAreaView style={globals.container}>
      <ScrollView style={globals.padding} showsVerticalScrollIndicator={false}>
        {isLoaded ? (
          <ActivityIndicator size="large" color="#222" />
        ) : (
          <View style={styles.container}>
            <Text style={globals.heading}>Browse or Search for a Meal</Text>

            <TextInput
              placeholder="e.g chicken"
              onChangeText={(text) => setSearchText(text.toLowerCase())}
              onSubmitEditing={handleSearch}
              style={styles.input}
            />

            {results ? (
              <>
                <View style={styles.cards}>
                  {results.map((result) => (
                    <TouchableOpacity
                      key={result.idMeal}
                      onPress={() => navigation.navigate("SingleFood", result)}
                    >
                      <View>
                        <Image
                          source={{ uri: result.strMealThumb }}
                          style={[globals.image, styles.image]}
                        />
                        <Text style={[globals.heading2, styles.mealName]}>
                          {result.strMeal}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              </>
            ) : (
              <>
                <View style={styles.cards}>
                  {foods.map((food) => (
                    <TouchableOpacity
                      key={food.idCategory}
                      onPress={() => navigation.navigate("Food", food)}
                    >
                      <View>
                        <Image
                          source={{ uri: food.strCategoryThumb }}
                          style={globals.image}
                        />
                        <Text style={globals.heading2}>{food.strCategory}</Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              </>
            )}
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
  heading2: {
    marginVertical: 16,
    fontFamily: "productsansbold",
  },
  cards: {
    marginBottom: 32,
  },
  input: {
    fontSize: 16,
    fontFamily: "productsansregular",
    borderColor: "#ececec",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 32,
    textTransform: "lowercase",
  },
  cards: {
    gap: 32,
  },
  mealName: {
    marginTop: 8,
  },
  image: {
    borderRadius: 16,
  },
});
