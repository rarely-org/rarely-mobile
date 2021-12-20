import React from "react"
import { StyleSheet, TextInput } from "react-native"
import { Formik, useFormikContext } from "formik";
import { supabase } from '../config/supabase';

import Screen from "../components/Screen"
import Button from "../components/Button"
import FormImagePicker from "../components/form/FormImagePicker";

const createPost = async (text) => {
  text = text.trim()

  if (text.length) {
    const { data: post, error } = await supabase
      .from('posts')
      .insert({ text })
      .single()

    if (error) console.log(error.message)
    else {}
  }
}

const TextField = () => {
  const { handleChange } = useFormikContext();

  return (
    <TextInput
      maxLength={1000}
      multiline
      numberOfLines={3}
      placeholder="Add a text"
      onChangeText={handleChange("text")}
    />
  )
}

const SubmitButton = () => {
  const { handleSubmit } = useFormikContext();

  return (
    <Button title="Post" onPress={handleSubmit} />
  )
}

function PostEditScreen() {
  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={{
          text: "",
        }}
        // onSubmit={(values) => console.log(values)}
        onSubmit={({text}) => createPost(text)}
      >
        <>
          <FormImagePicker name="images" />
          <TextField />
          <SubmitButton />
        </>
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default PostEditScreen;