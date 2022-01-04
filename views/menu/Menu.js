import { ScrollView, View, Image } from "react-native";
import { Card, Title, Text } from "react-native-paper";
import globalStyles from "../../globalStyles";
import styles from "./styles";
import React from "react";
import logo from "../../assets/logo.png";
import { Rating } from "react-native-elements";
export default function Menu({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <View style={[globalStyles.centerBox, styles.imageContainer]}>
        <Image source={logo} style={styles.image} />
      </View>
      <View style={globalStyles.centerBox}>
        <Title style={globalStyles.pageTitle}>Menu</Title>
      </View>
      <View style={styles.scrollViewContainer}>
        <ScrollView>
          <View style={styles.container}>
            <Card style={styles.cards}>
              <Card.Content>
                <Text>Image will go Here</Text>
              </Card.Content>
            </Card>
            <View>
              <Title>Pizza Name</Title>
              <View style={globalStyles.centerBox}>
                <Text style={globalStyles.longText}>Description</Text>
              </View>
              <Rating showRating imageSize={20} tintColor='#121212' />
            </View>
          </View>

          <View style={styles.container}>
            <Card style={styles.cards}>
              <Card.Content>
                <Text>Image will go Here</Text>
              </Card.Content>
            </Card>
            <View>
              <Title>Pizza Name</Title>
              <View style={globalStyles.centerBox}>
                <Text style={globalStyles.longText}>Description</Text>
              </View>
              <Rating showRating imageSize={20} tintColor='#121212' />
            </View>
          </View>

          <View style={styles.container}>
            <Card style={styles.cards}>
              <Card.Content>
                <Text>Image will go Here</Text>
              </Card.Content>
            </Card>
            <View>
              <Title>Pizza Name</Title>
              <View style={globalStyles.centerBox}>
                <Text style={globalStyles.longText}>Description</Text>
              </View>
              <Rating showRating imageSize={20} tintColor='#121212' />
            </View>
          </View>

          <View style={styles.container}>
            <Card style={styles.cards}>
              <Card.Content>
                <Text>Image will go Here</Text>
              </Card.Content>
            </Card>
            <View>
              <Title>Pizza Name</Title>
              <View style={globalStyles.centerBox}>
                <Text style={globalStyles.longText}>Description</Text>
              </View>
              <Rating showRating imageSize={20} tintColor='#121212' />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
