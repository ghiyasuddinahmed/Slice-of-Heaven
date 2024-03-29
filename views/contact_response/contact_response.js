import { View, Image } from "react-native";
import { Button, Text, Card } from "react-native-paper";
import logo from "../../assets/logo-transparent.png";
import React from "react";

import globalStyles from "../../globalStyles";
import styles from "./styles";

export default function ContactResponse({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.imageContainer} />
      <Card style={styles.cards}>
        <Text style={styles.response_text}>Thank you.</Text>
        <Text style={styles.response_text}>We will be in touch shortly!</Text>
      </Card>
      <Button
        icon='page-next-outline'
        mode='contained'
        color={"white"}
        onPress={() => navigation.goBack()}
        styles={globalStyles.button}
      >
        Continue
      </Button>
    </View>
  );
}
