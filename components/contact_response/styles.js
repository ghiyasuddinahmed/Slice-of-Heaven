import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5%',
    height: '100%',
    backgroundColor: theme.colors.background,
  },
  imageContainer: {
    width: 350,
    height: 350,
  },
  response_text: {
    fontFamily: 'LuxuriousRoman',
    fontSize: 14,
  },
  cards: {
    marginBottom: '10%',
    backgroundColor: theme.colors.background,
    borderBottomWidth: 3,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: 'white',
    borderRadius: 50,
    padding: 12,
    height: '14%',
  },
});

export default styles;
