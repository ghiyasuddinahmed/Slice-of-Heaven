import { View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import styles from './styles';

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>Slice of Heaven</Text>
      </View>

      <View style={styles.pageTitleBox}>
        <Text style={styles.pageTitle}>Sign In</Text>
      </View>
      <TextInput label='Email' style={styles.input} placeholder='Email' />
      <TextInput label='Password' style={styles.input} placeholder='Password' />
      <Button mode='contained' style={styles.button}>
        Login
      </Button>
    </View>
  );
}
