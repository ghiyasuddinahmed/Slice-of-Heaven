import { StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  cards: {
    marginRight: 15,
  },

  imageContainer: {
    flex: 1,
  },
  image: {
    height: "90%",
    width: "40%",
  },
  scrollViewContainer: {
    width: "100%",
    height: "70%",
    backgroundColor: theme.colors.background,
  },

  container: {
    flexDirection: "row",
    margin: 5,
  },
});

export default styles;
