import { useState } from 'react';
import { View } from 'react-native';
import { Button, Text, TextInput, Title } from 'react-native-paper';
import globalStyles from '../../globalStyles';
import styles from './styles';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.titleBox}>
        <Title style={[styles.font, globalStyles.title]}>SLICE OF HEAVEN</Title>
      </View>
      <View style={globalStyles.titleBox}>
        <Title style={globalStyles.pageTitle}>SIGN IN</Title>
      </View>
      <TextInput
        label='Email'
        placeholder='Email'
        style={globalStyles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        label='Password'
        placeholder='Password'
        style={globalStyles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        mode='contained'
        onPress={() => navigation.navigate('Contact_Response')}
      >
        Login
      </Button>
      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <View>
          <Text>OR</Text>
        </View>
        <View style={styles.line} />
      </View>
      <View style={styles.socialButtonContainer}>
        <Button mode='contained' style={styles.buttons}>
          Facebook
        </Button>
        <Button mode='contained' style={styles.buttons}>
          Google
        </Button>
      </View>

      <View style={globalStyles.titleBox}>
        <Text>
          Don't have an account?
          <Text
            style={globalStyles.link}
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
