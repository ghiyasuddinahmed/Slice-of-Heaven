import React, { useState } from "react";
import { View, Alert } from "react-native";
import { Button, Text, TextInput, Title } from "react-native-paper";
import globalStyles from "../../globalStyles";
import styles from "./styles";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res._tokenResponse) {
        navigation.replace("Menu");
      }
    } catch (err) {
      Alert.alert(err);
    }
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.centerBox}>
        <Title style={globalStyles.title}>SLICE OF HEAVEN</Title>
      </View>
      <View style={globalStyles.centerBox}>
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
      <Button mode='contained' onPress={handleLogin}>
        Login
      </Button>
      <View style={styles.lineContainer}>
        <View style={styles.line} />
        <View>
          <Text>OR</Text>
        </View>
        <View style={styles.line} />
      </View>

      <View style={globalStyles.centerBox}>
        <Text>
          Don't have an account?
          <Text
            style={globalStyles.link}
            onPress={() => navigation.navigate("Signup")}
          >
            {" "}
            Sign up
          </Text>
        </Text>
      </View>
    </View>
  );
}
