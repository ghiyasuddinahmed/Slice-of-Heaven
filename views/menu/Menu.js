import { ScrollView, View } from 'react-native';
import { Card } from 'react-native-paper';
import globalStyles from '../../globalStyles';
import styles from './styles';
import React from 'react';
export default function Menu({ navigation }) {
  return (
    <View>
      <View style={globalStyles.container}>
        <ScrollView>
          <Card style={styles.cards}>
            <Card.Content>Image will go Here</Card.Content>
          </Card>
        </ScrollView>
      </View>
    </View>
  );
}
