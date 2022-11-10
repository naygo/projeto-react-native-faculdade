import React, { useEffect, useState } from "react";
import { View, Alert, Text, TouchableOpacity } from "react-native";
import Header from "./components/header";
import Books from "./components/books";
import styles from "./styles";
import FormBook from "./components/formBook";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as LocalAuthentication from "expo-local-authentication";

export default function App() {
  const [compatible, setCompatible] = useState(false);
  const [autenticable, setAutenticable] = useState(false);
  const [autenticated, setAutenticated] = useState(false);

  const [books, setBooks] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [book, setBook] = useState(null);
  const [onlyRead, setOnlyRead] = useState(false);

  async function verifyCompatibility() {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    if (compatible) setCompatible(true);

    const autenticable = await LocalAuthentication.isEnrolledAsync();
    if (autenticable) setAutenticable(true);
  }

  const autenticate = async () => {
    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "Authorization required",
    });
    if (result.success) setAutenticated(true);
  };

  async function saveBooks() {
    try {
      await AsyncStorage.setItem("books", JSON.stringify(books));
    } catch (error) {
      Alert.alert("Error", "Error saving books");
    }
  }

  async function getBooks() {
    try {
      const jsonValue = await AsyncStorage.getItem("books");
      if (jsonValue !== null) {
        setBooks(JSON.parse(jsonValue));
      }
    } catch (error) {
      Alert.alert("Error", "Error getting books");
    }
  }

  useEffect(() => {
    getBooks();
    verifyCompatibility();
  }, []);

  useEffect(() => {
    saveBooks();
  }, [books]);

  const addBook = (title, author, pages) => {
    const newBook = {
      id: uuidv4(),
      title,
      author,
      pages,
    };

    setBooks([...books, newBook]);
    setIsAdding(false);
    Alert.alert("Success", "Book added successfully");
  };

  const showUpdateForm = (id) => {
    setIsUpdating(true);
    setIsAdding(false);
    setBook(books.find((book) => book.id === id));
  };

  const updateBook = (title, author, pages) => {
    const updatedBook = {
      id: book.id,
      title,
      author,
      pages,
    };

    const updatedBooks = books.map((book) =>
      book.id === updatedBook.id ? updatedBook : book
    );

    setBooks(updatedBooks);
    setIsUpdating(false);
    setBook(null);
    Alert.alert("Success", "Book updated successfully");
  };

  const deleteBook = (id) => {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
    Alert.alert("Success", "Book deleted successfully");
  };

  const toggleRead = (id) => {
    const updatedBooks = books.map((book) =>
      book.id === id ? { ...book, read: !book.read } : book
    );

    setBooks(updatedBooks);
  };

  return (
    <>
      {!autenticable || !compatible || autenticated ? (
        <View style={styles.app}>
          <View style={styles.container}>
            <Header
              isAdding={isAdding}
              onIsAdding={() => {
                setIsAdding(!isAdding);
                setIsUpdating(false);
              }}
              onGoBack={() => {
                setIsAdding(false);
                setIsUpdating(false);
                setBook(null);
              }}
            />

            {isAdding || isUpdating ? (
              <FormBook
                book={isUpdating ? book : null}
                isAdding={isAdding}
                isUpdating={isUpdating}
                onAddBook={addBook}
                onUpdateBook={updateBook}
              />
            ) : (
              <View style={styles.contentBooks}>
                {books.length > 0 ? (
                  <Books
                    books={onlyRead ? books.filter((book) => book.read) : books}
                    onUpdateBook={showUpdateForm}
                    onDeleteBook={deleteBook}
                    onToggleRead={toggleRead}
                    onShowOnlyRead={setOnlyRead}
                  />
                ) : (
                  <Text style={styles.empty}>No books to show</Text>
                )}
              </View>
            )}
          </View>
        </View>
      ) : (
        <View style={styles.login}>
          <Text style={styles.loginTitle}>My Books</Text>
          <TouchableOpacity style={styles.loginButton} onPress={autenticate}>
            <Text style={styles.loginButtonText}>ENTRAR</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
}
