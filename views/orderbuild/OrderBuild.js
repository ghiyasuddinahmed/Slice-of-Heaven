import React from "react";
import { View } from "react-native";
import { Card, Checkbox, List } from "react-native-paper";

export default function OrderBuild({ navigation }) {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <View>
      <Card>
        <List.Section title='Accordions'>
          <List.Accordion
            title='Controlled Accordion'
            left={(props) => <List.Icon {...props} icon='folder' />}
            expanded={expanded}
            onPress={handlePress}
          >
            <List.Item title='First item' />
            <List.Item title='Second item' />
          </List.Accordion>
        </List.Section>

        <Checkbox.Item label='Item' status='checked' />
      </Card>
    </View>
  );
}
