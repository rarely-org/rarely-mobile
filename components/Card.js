import React from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import Text from "./Text";
import colors from "../config/colors";

function Card({ text, images, products, categories, navigation }) {
  // console.log('Card:images', images)
  // console.log('Card:text', text)
  return (
    <View style={styles.card}>
      {images && images.length > 0 && (
        <Image style={styles.image} source={{ uri: images[0] }} />
      )}
      <View style={styles.textContainer}>
        <Text style={styles.text} numberOfLines={10}>
          {text}
        </Text>
      </View>
      {products && products.map((product) => (
        <TouchableOpacity onPress={() => navigation.navigate('Product', product)}>
          <Text style={styles.product}>{product.name}</Text>
        </TouchableOpacity>
      ))}
      {categories && categories.map((category) => (
        <TouchableOpacity onPress={() => navigation.navigate('Category', category)}>
          <Text style={styles.product}>{category.name}</Text>
        </TouchableOpacity>
      ))}
      <View style={styles.condition}>
        <Text style={styles.conditionChip}>SMA</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    backgroundColor: colors.white,
    margin: 15,
    marginBottom: 0,
    overflow: "hidden",
  },
  image: {
    aspectRatio: 1,
  },
  textContainer: {
    padding: 15,
  },
  product: {
    padding: 15,
    backgroundColor: '#eee',
  },
  condition: {
    padding: 15,
    paddingTop: 0,
    backgroundColor: '#eee',
    textAlign: 'right',
    flexDirection: 'column',
    alignItems: 'flex-end',
    position: 'relative',
  },
  conditionChip: {
    position: 'relative',
    backgroundColor: '#dedede',
    color: '#aaa',
    padding: 4,
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: 14,
    borderRadius: 8,
    borderColor: '#dedede',
    borderWidth: 1,
    overflow: "hidden",
  }
});

export default Card;
