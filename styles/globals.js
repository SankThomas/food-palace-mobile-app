import { StyleSheet } from "react-native";

export const globals = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  padding: {
    paddingHorizontal: 24,
  },
  heading: {
    fontSize: 24,
    fontFamily: "productsansbold",
    color: "#222",
    marginBottom: 16,
  },
  heading2: {
    fontSize: 20,
    fontFamily: "productsansbold",
  },
  text: {
    fontSize: 16,
    fontFamily: "productsansregular",
    color: "#444",
    lineHeight: 30,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
  },
});
