import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";
import { supabase } from '../config/supabase';

// URL polyfill. Required for Supabase queries to work in React Native.
import 'react-native-url-polyfill/auto'

function ProductPostsScreen({ navigation, route }) {
  console.log('route.params', route.params);

  const [posts, setPosts] = useState([])
  const [refreshing, setRefreshing] = useState(false)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    const { data: posts, error } = await supabase
      .from('posts')
      .select('*, products!post_product!inner (id, name)')
      .in('categories.id', [route.params.id])
      .order('id', { ascending: false })

    console.log('posts for product:', posts)
    console.log('error for product:', error)

    if (!error) {
      posts.forEach(post => {
        if (post.images) {
          post.images = post.images.map(image => {
            console.log('image', image)
            const { publicURL, error } = supabase
              .storage
              .from('images')
              .getPublicUrl(image)

            console.log('publicURL', publicURL)
            console.log('error', error)
            
            return publicURL
          })
        }
      })

      setPosts(posts) 
    } else {
      console.log('error', error)
    }
  }

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={posts}
        keyExtractor={(post) => post.id.toString()}
        showsVerticalScrollIndicator={false}
        contentInset={{ right: 0, top: 0, left: 0, bottom: 15 }}
        renderItem={({ item: post }) => (
          <Card
            images={post.images}
            text={post.text}
            products={post.products}
            navigation={navigation}
          />
        )}
        refreshing={refreshing}
        onRefresh={fetchPosts}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
});

export default ProductPostsScreen;
