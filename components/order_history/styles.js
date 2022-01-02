import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: "2%",
    height: "100%",
    backgroundColor: theme.colors.background,
  },
  imageContainer: {
    width: 120,
    height: 120,
    borderRightWidth: 2,
    borderColor: "grey",
  },
  header: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "flex-end",
  },
  response_text: {
    fontFamily: "LuxuriousRoman",
    fontSize: 20,
  },
  cards: {
    marginHorizontal: 2,
    backgroundColor: theme.colors.background,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 3,
    borderTopWidth: 3,
    borderRadius: 50,
    borderColor: "white",
    padding: 10,
  },
  submitBtn: {
    width: 20,
  },
  inputField: {
    margin: 3,
  },
  btn: {
    width: "50%",
  },
  btnContainer: {
    alignItems: "flex-end",
  },
});

export default styles;
