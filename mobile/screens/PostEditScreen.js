import React from "react"
import { StyleSheet, TextInput } from "react-native"
import { Formik, useFormikContext } from "formik";

import Screen from "../components/Screen"
import Button from "../components/Button"

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
        onSubmit={(values) => console.log(values)}
      >
        <>
          <TextInput
            maxLength={1000}
            multiline
            name="text"
            numberOfLines={3}
            placeholder="Add a text"
          />
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