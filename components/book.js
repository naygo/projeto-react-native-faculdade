import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import CheckBox from "expo-checkbox";
import styles from "../styles";

export default function Book({
  id,
  author,
  pages,
  title,
  read,
  onUpdate,
  onDelete,
  onCheck,
}) {
  // exibe informações do livro e botões de atualizar e deletar
  return (
    <View style={styles.li}>
      <View style={styles.titleBlock}>
        <Text style={styles.liTitleBook}>{title}</Text>
        <View style={styles.iconsBlock}>
          <TouchableOpacity onPress={() => onUpdate(id)}>
            <View style={styles.button}>
              <Image
                source={require("../assets/edit-icon.png")}
                style={styles.iconImg}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => onDelete(id)}>
            <View style={styles.button}>
              <Image
                source={require("../assets/delete-icon.png")}
                style={styles.iconImg}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.listBooksInfo}>
        <View style={styles.infoBlock}>
          <CheckBox
            disabled={false}
            value={read}
            style={styles.checkbox}
            color="black"
            onValueChange={() => onCheck(id)}
          />
        </View>
        <View style={styles.infoBlock}>
          <Text style={[styles.liText, styles.liLabel]}>Author:</Text>
          <Text style={styles.liText}>{author}</Text>
        </View>
        <View style={styles.infoBlock}>
          <Text style={[styles.liText, styles.liLabel]}>Pages:</Text>
          <Text style={styles.liText}>{pages}</Text>
        </View>
      </View>
    </View>
  );
}
