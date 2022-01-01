import { ScrollView, View } from 'react-native';
import { Card } from 'react-native-paper';
import theme from '../../theme';
import globalStyles from '../../globalStyles';
import styles from './styles';
export default function Menu({ navigation }) {
  return (
    <View>
      <View style={globalStyles.container}>
        <ScrollView>
          <Card style={styles.cards}>
            <Card.Content></Card.Content>
          </Card>
        </ScrollView>
      </View>
    </View>
  );
}
