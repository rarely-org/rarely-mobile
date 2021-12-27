import React from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";

import Text from "./Text";
import colors from "../config/colors";

function Card({ text, images, onPress }) {
  console.log('Card:images', images)
  console.log('Card:text', text)
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        {images && images.length > 0 && (
          <Image style={styles.image} source={{ uri: images[0] }} />
        )}
        <View style={styles.detailsContainer}>
          <Text style={styles.text} numberOfLines={5}>
            {text}
          </Text>
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
  detailsContainer: {
    padding: 15,
  },
  image: {
    aspectRatio: 1,
  },
});

export default Card;
