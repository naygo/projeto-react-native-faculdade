import React, { useEffect, useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import styles from "../styles";

export default function FormBook({
  book,
  isAdding,
  isUpdating,
  onAddBook,
  onUpdateBook,
}) {
  const [title, setTitle] = useState(book?.title || "");
  const [author, setAuthor] = useState(book?.author || "");
  const [pages, setPages] = useState(book?.pages || "");

  useEffect(() => {
    if (isAdding) {
      setTitle("");
      setAuthor("");
      setPages("");
    }
  }, [isAdding]);

  const addBook = () => {
    onAddBook(title, author, pages);
    setTitle("");
    setAuthor("");
    setPages("");
  };

  const updateBook = () => {
    onUpdateBook(title, author, pages);
    setTitle("");
    setAuthor("");
    setPages("");
  };

  return (
    // exibe formulário para adicionar ou atualizar livro
    <View style={styles.contentFormBooks}>
      <View>
        <Text style={[styles.h1, styles.titleFormBook]}>
          {isAdding ? "Add a new book" : "Update book"}
        </Text>
        <View style={styles.form}>
          <View style={styles.input}>
            <TextInput
              style={[styles.field, styles.mb]}
              defaultValue={book?.title}
              placeholder="Title"
              onChangeText={(text) => setTitle(text)}
            />
          </View>
          <TextInput
            style={[styles.field, styles.mb]}
            defaultValue={book?.author}
            placeholder="Author"
            onChangeText={(text) => setAuthor(text)}
          />
          <TextInput
            style={[styles.field, styles.mb]}
            defaultValue={book?.pages}
            placeholder="Pages"
            onChangeText={(text) => setPages(text)}
          />
        </View>
        <View style={styles.buttonForm}>
          {isAdding && (
            <Button title="Adicionar" onPress={addBook} color="green" />
          )}

          {isUpdating && (
            <Button title="Confirmar" onPress={updateBook} color="green" />
          )}
        </View>
      </View>
    </View>
  );
}
