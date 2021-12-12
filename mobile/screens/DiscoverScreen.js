import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";
import { supabase } from '../config/supabase';

// URL polyfill. Required for Supabase queries to work in React Native.
import 'react-native-url-polyfill/auto'

function DiscoverScreen({ navigation }) {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const { data: posts, error } = await supabase
      .from('posts')
      .select('*')
      .order('id', { ascending: false })

    if (error) console.log('error', error)
    else setPosts(posts)
  }

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
