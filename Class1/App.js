// src/components/Login.js

import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement authentication logic here
    console.log(password, email);
  };

  return (
    <>
    <View style={styles.container3}>
        <Text>Here is the  Header</Text>
      </View>
      <View style={styles.container}>
        <Text style={{ fontSize: 30, marginBottom: 20 }}>
          Verstile Professor
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <Button title="Login" onPress={handleLogin} />
      </View>
      <View style={styles.container2}>
        <Text>Here is the  footer</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 9,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'green'
  },
  container3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'yellow'
  },
  container2: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'yellow'
  },
  input: {
    width: "90%",
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default App;
