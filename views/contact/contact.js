import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { Button, Text, Card, TextInput } from 'react-native-paper';
import logo from '../../assets/logo-transparent.png';

import styles from './styles';

export default function Contact({ navigation }) {
  const [contactInfo, setInfo] = useState({
    name: '',
    email: '',
    message: '',
  });

  const onSubmit = () => {
    navigation.navigate('Contact_Response');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.imageContainer} />
        <View>
          <Text style={styles.response_text}>Get in Touch!</Text>
          <Text style={styles.font}>
            {'We will get back to \nyou as soon as we can.'}
          </Text>
        </View>
      </View>
      <Card style={styles.cards}>
        <TextInput
          label='Name'
          placeholder='Name'
          style={styles.inputField}
          value={contactInfo.name}
          onChangeText={(e) => setInfo({ ...contactInfo, name: e })}
        />
        <TextInput
          label='Email'
          placeholder='Email'
          style={styles.inputField}
          value={contactInfo.email}
          onChangeText={(e) => setInfo({ ...contactInfo, email: e })}
        />
        <TextInput
          multiline
          numberOfLines={3}
          label='Message'
          placeholder='Message'
          style={styles.inputField}
          value={contactInfo.message}
          onChangeText={(e) => setInfo({ ...contactInfo, message: e })}
        />
      </Card>
      <View style={styles.btnContainer}>
        <Button
          icon='send-outline'
          mode='contained'
          color={'white'}
          onPress={onSubmit}
          style={styles.btn}
        >
          Send
        </Button>
      </View>
    </View>
  );
}
