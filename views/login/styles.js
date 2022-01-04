import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  socialButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: "5%",
  },
  lineContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttons: {
    width: "40%",
  },

  line: {
    flex: 1,
    height: 1,
    marginHorizontal: 5,
    backgroundColor: "white",
  },
});

export default styles;
