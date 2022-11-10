import React, { useState } from "react";
import { View, Text } from "react-native";
import CheckBox from "expo-checkbox";
import styles from "../styles";

export default function BookHeader({onShowOnlyRead}) {
  const [onlyRead, setOnlyRead] = useState(false);

  const toggleOnlyRead = () => {
    setOnlyRead(!onlyRead);
    console.log(onlyRead)
    onShowOnlyRead(!onlyRead);
  };

  return (
    // exibe título e checkbox para mostrar apenas livros lidos
    <View style={styles.bookHeader}>
      <Text style={styles.h1}>Books</Text>
      <View style={styles.onlyReads}>
        <Text style={[styles.h3, styles.mr]}>Show only read books</Text>
        <CheckBox
          disabled={false}
          value={onlyRead}
          style={styles.checkbox}
          color="black"
          onValueChange={() => toggleOnlyRead()}
        />
      </View>
    </View>
  );
}
