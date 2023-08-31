import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { globals } from "../styles/globals";
import { AntDesign } from "@expo/vector-icons";

export default function Favorites({ route, navigation }) {
  function handleDelete(id) {
    route.params.filter((item) => item.id !== id);
  }

  return (
    <SafeAreaView style={globals.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={globals.padding}>
        <View>
          <View style={styles.cards}>
            {route.params ? (
              route.params.map((food, index) => (
                <TouchableOpacity key={index + 1}>
                  <View>
                    <Image
                      source={{ uri: food.image }}
                      style={[globals.image, styles.image]}
                    />
                    <View style={styles.flex}>
                      <Text style={globals.heading2}>{food.name}</Text>
                      <TouchableOpacity onPress={() => handleDelete(food.id)}>
                        <AntDesign name="delete" size={24} color="#f43f5e" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </TouchableOpacity>
              ))
            ) : (
              <Text style={globals.heading}>No Favorites Added</Text>
            )}

            <Text style={globals.text}>
              NOTE: This will not actually save your favorite foods...yet. I'm
              working on that.
            </Text>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.button}>Go Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cards: {
    marginTop: 16,
    marginBottom: 32,
    gap: 32,
  },
  image: {
    borderRadius: 16,
    marginBottom: 16,
  },
  flex: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  },
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "#222222",
    color: "#ffffff",
    fontSize: 16,
    fontFamily: "productsansbold",
    paddingVertical: 16,
    width: "100%",
    borderRadius: 32,
    textAlign: "center",
  },
});
