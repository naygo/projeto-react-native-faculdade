import React from "react";
import { View, Text, Button } from "react-native";
import styles from "../styles";

export default function Header({ onGoBack, onIsAdding, isAdding }) {
  return (
    // exibe título e botão para adicionar livro
    <View style={styles.headerBar}>
      <Text
        style={styles.headerBarText}
        onPress={() => {
          onGoBack(false);
        }}
      >
        My Books
      </Text>
      <Button
        title="+"
        onPress={() => {
          onIsAdding(!isAdding);
        }}
        color="black"
      />
    </View>
  );
}
