import { useState } from 'react';
import { View } from 'react-native';
import { Button, Text, TextInput, Title } from 'react-native-paper';
import styles from './styles';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <Title style={styles.title}>SLICE OF HEAVEN</Title>
      </View>

      <View style={styles.titleBox}>
        <Title style={styles.pageTitle}>SIGN IN</Title>
      </View>
      <TextInput
        label='Email'
        placeholder='Email'
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        label='Password'
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        mode='contained'
        onPress={() => alert('Hi')}
        style={styles.button}
      >
        Login
      </Button>
      <View style={styles.titleBox}>
        <Text>
          Don't have an account?
          <Text
            style={styles.link}
            onPress={() => navigation.navigate('Signup')}
          >
            {' '}
            Sign up
          </Text>
        </Text>
      </View>
    </View>
  );
}
