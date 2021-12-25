import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    width: '100%',
    paddingHorizontal: '5%',
    height: '100%',
    backgroundColor: theme.colors.background,
  },
  titleBox: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },

  pageTitle: {
    fontWeight: 'bold',
  },

  button: {
    width: '30%',
    marginHorizontal: '35%',
  },

  link: {
    color: theme.colors.primary,
  },
});

export default styles;
