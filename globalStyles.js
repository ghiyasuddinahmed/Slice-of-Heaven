import { StyleSheet } from "react-native";
import theme from "./theme";

const globalStyles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    width: "100%",
    padding: "5%",
    height: "100%",
    backgroundColor: theme.colors.background,
  },
  titleBox: {
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
  },
  input: {
    backgroundColor: theme.colors.surface,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "sans-serif",
  },

  pageTitle: {
    fontWeight: "bold",
  },

  button: {
    width: "30%",
  },

  link: {
    color: theme.colors.primary,
  },
});

export default globalStyles;
