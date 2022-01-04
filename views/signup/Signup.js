import React, { useState } from "react";
import { View, Alert } from "react-native";
import { Button, Text, TextInput, Title } from "react-native-paper";
import globalStyles from "../../globalStyles";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Signup({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSignup = async () => {
    if (password !== repeatPassword) {
      Alert.alert("Password mismatch");
    } else {
      try {
        const userCred = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        if (userCred.user !== null) {
          navigation.navigate("Menu");
        }
      } catch (err) {
        Alert.alert(err);
      }
    }
  };
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.centerBox}>
        <Title style={globalStyles.title}>SLICE OF HEAVEN</Title>
      </View>

      <View style={globalStyles.centerBox}>
        <Title style={globalStyles.pageTitle}>SIGN UP</Title>
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

      <TextInput
        label='Repeat Password'
        placeholder='Repeat Password'
        style={globalStyles.input}
        value={repeatPassword}
        onChangeText={setRepeatPassword}
        secureTextEntry
      />
      <Button mode='contained' onPress={handleSignup}>
        Sign Up
      </Button>

      <View style={globalStyles.centerBox}>
        <Text>
          Already have an account?
          <Text
            style={globalStyles.link}
            onPress={() => navigation.navigate("Login")}
          >
            {" "}
            Login
          </Text>
        </Text>
      </View>
    </View>
  );
}
