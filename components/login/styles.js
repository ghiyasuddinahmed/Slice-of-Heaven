import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: '100%',
    padding: '5%',
  },

  titleBox: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    marginBottom: '25%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
  pageTitleBox: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    marginBottom: '5%',
  },
  pageTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
  input: {
    margin: '2%',
  },
  button: {
    width: '30%',
    margin: '2%',
  },
});

export default styles;
