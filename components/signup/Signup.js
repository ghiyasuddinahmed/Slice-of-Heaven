import { useState } from 'react';
import { View } from 'react-native';
import { Button, Text, TextInput, Title } from 'react-native-paper';
import styles from './styles';

export default function Signup({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.titleBox}>
        <Title style={styles.title}>SLICE OF HEAVEN</Title>
      </View>

      <View style={styles.titleBox}>
        <Title style={styles.pageTitle}>SIGN UP</Title>
      </View>

      <TextInput
        label='Name'
        placeholder='Name'
        value={email}
        onChangeText={setName}
      />

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
        Sign Up
      </Button>

      <View style={styles.titleBox}>
        <Text>
          Already have an account?
          <Text
            style={styles.link}
            onPress={() => navigation.navigate('Login')}
          >
            {' '}
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
}
