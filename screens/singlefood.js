import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { globals } from "../styles/globals";
import { ActivityIndicator } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";

export default function SingleFood({ route, navigation }) {
  const [foods, setFoods] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [liked, setLiked] = useState(false);

  async function fetchMealName() {
    try {
      setIsLoaded(true);
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${route.params.strMeal}`
      );
      const data = await res.json();
      setFoods(data.meals);
      setIsLoaded(false);
    } catch (error) {
      Alert.alert("Something went wrong");
    }
  }

  useEffect(() => {
    fetchMealName();
  }, []);

  function handleLikedFood() {
    setLiked(!liked);
  }

  return (
    <SafeAreaView style={globals.container}>
      <ScrollView style={globals.padding} showsVerticalScrollIndicator={false}>
        {isLoaded ? (
          <ActivityIndicator size="large" color="#222" />
        ) : (
          <View style={styles.container}>
            <View style={styles.header}>
              <Text style={styles.heading}>{route.params.strMeal}</Text>

              <TouchableOpacity onPress={handleLikedFood}>
                {liked ? (
                  <AntDesign name="heart" size={24} color="#f43f5e" />
                ) : (
                  <Feather name="heart" size={24} color="#222222" />
                )}
              </TouchableOpacity>
            </View>

            <View style={styles.cards}>
              {foods.map((food) => (
                <View key={food.idMeal} style={styles.card}>
                  <Image
                    source={{ uri: food.strMealThumb }}
                    style={[globals.image, styles.image]}
                  />

                  <Text style={[globals.heading2, styles.heading2]}>
                    Ingredients
                  </Text>

                  <View style={styles.ingredients}>
                    {/* I realize this is not a good way to do this: please don't chew my head off (maybe a little bit) and then offer a better way. Thanks! :) */}
                    {food.strMeasure1 && food.strIngredient1 ? (
                      <Text style={globals.text}>
                        1. {food.strMeasure1} {food.strIngredient1}
                      </Text>
                    ) : null}

                    {food.strMeasure2 && food.strIngredient2 ? (
                      <Text style={globals.text}>
                        2. {food.strMeasure2} {food.strIngredient2}
                      </Text>
                    ) : null}

                    {food.strMeasure3 && food.strIngredient3 ? (
                      <Text style={globals.text}>
                        3. {food.strMeasure3} {food.strIngredient3}
                      </Text>
                    ) : null}

                    {food.strMeasure4 && food.strIngredient4 ? (
                      <Text style={globals.text}>
                        4. {food.strMeasure4} {food.strIngredient4}
                      </Text>
                    ) : null}

                    {food.strMeasure5 && food.strIngredient5 ? (
                      <Text style={globals.text}>
                        5. {food.strMeasure5} {food.strIngredient5}
                      </Text>
                    ) : null}

                    {food.strMeasure6 && food.strIngredient6 ? (
                      <Text style={globals.text}>
                        6. {food.strMeasure6} {food.strIngredient6}
                      </Text>
                    ) : null}

                    {food.strMeasure7 && food.strIngredient7 ? (
                      <Text style={globals.text}>
                        7. {food.strMeasure7} {food.strIngredient7}
                      </Text>
                    ) : null}

                    {food.strMeasure8 && food.strIngredient8 ? (
                      <Text style={globals.text}>
                        8. {food.strMeasure8} {food.strIngredient8}
                      </Text>
                    ) : null}

                    {food.strMeasure9 && food.strIngredient9 ? (
                      <Text style={globals.text}>
                        9. {food.strMeasure9} {food.strIngredient9}
                      </Text>
                    ) : null}

                    {food.strMeasure10 && food.strIngredient10 ? (
                      <Text style={globals.text}>
                        10. {food.strMeasure10} {food.strIngredient10}
                      </Text>
                    ) : null}

                    {food.strMeasure11 && food.strIngredient11 ? (
                      <Text style={globals.text}>
                        11. {food.strMeasure11} {food.strIngredient11}
                      </Text>
                    ) : null}

                    {food.strMeasure12 && food.strIngredient12 ? (
                      <Text style={globals.text}>
                        12. {food.strMeasure12} {food.strIngredient12}
                      </Text>
                    ) : null}

                    {food.strMeasure13 && food.strIngredient13 ? (
                      <Text style={globals.text}>
                        13. {food.strMeasure13} {food.strIngredient13}
                      </Text>
                    ) : null}

                    {food.strMeasure14 && food.strIngredient14 ? (
                      <Text style={globals.text}>
                        14. {food.strMeasure14} {food.strIngredient14}
                      </Text>
                    ) : null}

                    {food.strMeasure15 && food.strIngredient15 ? (
                      <Text style={globals.text}>
                        15. {food.strMeasure15} {food.strIngredient15}
                      </Text>
                    ) : null}

                    {food.strMeasure16 && food.strIngredient16 ? (
                      <Text style={globals.text}>
                        16. {food.strMeasure16} {food.strIngredient16}
                      </Text>
                    ) : null}

                    {food.strMeasure17 && food.strIngredient17 ? (
                      <Text style={globals.text}>
                        17. {food.strMeasure17} {food.strIngredient17}
                      </Text>
                    ) : null}

                    {food.strMeasure18 && food.strIngredient18 ? (
                      <Text style={globals.text}>
                        18. {food.strMeasure18} {food.strIngredient18}
                      </Text>
                    ) : null}

                    {food.strMeasure19 && food.strIngredient19 ? (
                      <Text style={globals.text}>
                        19. {food.strMeasure19} {food.strIngredient19}
                      </Text>
                    ) : null}

                    {food.strMeasure20 && food.strIngredient20 ? (
                      <Text style={globals.text}>
                        20. {food.strMeasure20} {food.strIngredient20}
                      </Text>
                    ) : null}
                  </View>

                  <View style={styles.ingredients}>
                    <Text style={[globals.heading2, styles.heading2]}>
                      How to cook
                    </Text>
                    <Text style={globals.text}>{food.strInstructions}</Text>
                  </View>
                </View>
              ))}
            </View>

            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.buttonContainer}
            >
              <Text style={styles.button}>Continue browsing</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 16,
    marginBottom: 16,
  },
  container: {
    marginVertical: 32,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#222",
  },
  cards: {
    marginTop: 16,
    marginBottom: 32,
    gap: 32,
  },
  mealName: {
    marginTop: 8,
  },
  image: {
    borderRadius: 16,
  },
  heading2: {
    marginTop: 16,
    marginBottom: 8,
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "#222222",
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    paddingVertical: 16,
    width: "100%",
    borderRadius: 32,
    textAlign: "center",
  },
});
