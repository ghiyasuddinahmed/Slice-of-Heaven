import React, { useState } from "react";
import { View } from "react-native";
import { Image } from "react-native";
import { Text, Card, DataTable } from "react-native-paper";
import logo from "../../assets/logo-transparent.png";

import styles from "./styles";

export default function OrderHistory({ navigation }) {
  const [orders] = useState([
    {
      name: "A",
      Calories: 23,
      Fat: 2,
    },
    {
      name: "A",
      Calories: 23,
      Fat: 2,
    },
    {
      name: "A",
      Calories: 23,
      Fat: 2,
    },
    {
      name: "A",
      Calories: 23,
      Fat: 2,
    },
  ]);
  const [page, setPage] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.imageContainer} />
        <View>
          <Text style={styles.response_text}>Order History</Text>
        </View>
      </View>
      <Card style={styles.cards}>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Dessert</DataTable.Title>
            <DataTable.Title numeric>Calories</DataTable.Title>
            <DataTable.Title numeric>Fat</DataTable.Title>
          </DataTable.Header>
          {orders.map((item) => {
            return (
              <DataTable.Row>
                <DataTable.Cell>{item.name}</DataTable.Cell>
                <DataTable.Cell>{item.Calories}</DataTable.Cell>
                <DataTable.Cell>{item.Fat}</DataTable.Cell>
              </DataTable.Row>
            );
          })}

          <DataTable.Pagination
            page={page}
            numberOfPages={2}
            onPageChange={(newPage) => setPage(newPage)}
            label='1-2 of 6'
            itemsPerPage={0}
            showFastPagination
          />
        </DataTable>
      </Card>
    </View>
  );
}
