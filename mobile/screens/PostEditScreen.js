import React from "react"
import { StyleSheet, TextInput } from "react-native"
import { Formik, useFormikContext } from "formik";
import { supabase } from '../config/supabase';

import Screen from "../components/Screen"
import Button from "../components/Button"
import FormImagePicker from "../components/form/FormImagePicker";

const createPost = async ({ images, text }) => {

  console.log(images)

  const fileNames = []

  for (const image in images) {
    const imageUri = images[image]
    const formData = new FormData()


    // There may be safer ways to generate a unique filename
    const fileName = Date.now().toString(36) + Math.random().toString(36).substring(2) + '.jpg'

    formData.append('files', {
      uri: imageUri,
      name: fileName,
      type: 'image/jpeg'
    })

    fileNames.push(fileName)
    console.log('formData', formData)

    const { data, error } = await supabase.storage
      .from('images')
      .upload(fileName, formData)

    console.log('data', data)
    console.log('error', error)
  }

  text = text.trim()

  if (text.length) {
    console.log('Saving ...', text)
    const { data, error } = await supabase
      .from('posts')
      .insert({
        text,
        images: fileNames
      })
      .single()

    console.log('data', data)
    console.log('error', error)
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
          images: [],
        }}
        // onSubmit={(values) => console.log(values)}
        onSubmit={(values) => createPost(values)}
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