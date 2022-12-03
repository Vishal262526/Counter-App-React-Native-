import { View, Text, StatusBar, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import styles from "./Style.js";

export default function App() {
  const [count, setCount] = useState(0);

  const onCountIncrement = () => {
    setCount(count + 1);
  };

  const onCountDecrement = () => {
    if (count == 0) {
      alert("Value is already 0");
      return;
    }
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#CE7777" />
      <Text style={styles.heading}>Counter App</Text>
      <Text style={styles.text}>{count}</Text>
      <View style={styles.btnContainer}>
        <TouchableOpacity onPress={onCountIncrement}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>+</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity touchSoundDisabled={false} onPress={onCountDecrement}>
          <View style={styles.btn}>
            <Text style={styles.btnText}>-</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
