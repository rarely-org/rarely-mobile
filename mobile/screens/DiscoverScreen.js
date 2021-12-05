import React from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";

const posts = [
  {
    id: 1,
    text: "Mio from SORG",
  },
  {
    id: 2,
    text: "F5 Corpus VS from Permobil",
  },
];

function DiscoverScreen({ navigation }) {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={posts}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item: post }) => (
          <Card
            text={post.text}
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
