import { useState } from "react";
import { View, Image } from "react-native";
import { Button, Text, TextInput, Title } from "react-native-paper";
import styles from "./styles";
import logo from "../../assets/logo-transparent.png";
import AntIcon from "react-native-vector-icons/AntDesign";

export default function Signup({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.titleBox}>
          <Title></Title>
          <Title style={styles.pageTitle}> In Pizza We Crust!!!</Title>
          <Title>
            {" "}
            <AntIcon name="bulb1" color="yellow" size={20} /> Get 20% Off on
          </Title>
        </View>
      </View>

      <TextInput
        label="Name"
        placeholder="Name"
        value={email}
        onChangeText={setName}
      />

      <TextInput
        label="Email"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        label="Password"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button
        mode="contained"
        onPress={() => alert("Hi")}
        style={styles.button}
      >
        Sign Up
      </Button>

      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Text>
          Already have an account?
          <Text
            style={styles.link}
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
