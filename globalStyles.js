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
  centerBox: {
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
  },
  input: {
    elevation: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
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

  longText: {
    flex: 1,
    flexWrap: "wrap",
  },
});

export default globalStyles;
