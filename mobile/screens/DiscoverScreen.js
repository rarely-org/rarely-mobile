import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";

const items = [
  {
    id: 1,
    description: "Mio from SORG",
  },
  {
    id: 2,
    description: "F5 Corpus VS from Permobil",
  },
];

function DiscoverScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Card
            description={item.description}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default DiscoverScreen;
