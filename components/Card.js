import React from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

import Text from "./Text";
import colors from "../config/colors";

function Card({ text, images, products, onPress }) {
  // console.log('Card:images', images)
  // console.log('Card:text', text)
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        {images && images.length > 0 && (
          <Image style={styles.image} source={{ uri: images[0] }} />
        )}
        <View style={styles.textContainer}>
          <Text style={styles.text} numberOfLines={10}>
            {text}
          </Text>
        </View>
        {products.map((product) => (
          <Text style={styles.product}>{product.name}</Text> 
        ))}
        <View style={styles.condition}>
          <Text style={styles.conditionChip}>SMA</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
