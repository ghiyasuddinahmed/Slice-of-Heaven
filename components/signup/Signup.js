import { useState } from "react";
import { View } from "react-native";
import { Button, Text, TextInput, Title } from "react-native-paper";
import globalStyles from "../../globalStyles";

export default function Signup({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.titleBox}>
        <Title style={globalStyles.title}>SLICE OF HEAVEN</Title>
      </View>

      <View style={globalStyles.titleBox}>
        <Title style={globalStyles.pageTitle}>SIGN UP</Title>
      </View>

      <TextInput
        label="Name"
        placeholder="Name"
        style={globalStyles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        label="Email"
        placeholder="Email"
        style={globalStyles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        label="Password"
        placeholder="Password"
        style={globalStyles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button mode="contained" onPress={() => alert("Hi")}>
        Sign Up
      </Button>

      <View style={globalStyles.titleBox}>
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
