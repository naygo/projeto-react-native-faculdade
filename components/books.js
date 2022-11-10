import React from "react";
import { View, FlatList } from "react-native";
import styles from "../styles";
import Book from "./book";
import BookHeader from "./bookHeader";

export default function Books({
  books,
  onUpdateBook,
  onDeleteBook,
  onToggleRead,
  onShowOnlyRead,
}) {
  return (
    // renderiza lista de livros
    <>
      <BookHeader onShowOnlyRead={onShowOnlyRead} />

      <FlatList
        data={books}
        renderItem={(book) => (
          <Book
            id={book.id}
            {...book.item}
            onUpdate={onUpdateBook}
            onDelete={onDeleteBook}
            onCheck={onToggleRead}
          />
        )}
        keyExtractor={(book) => book.id}
      />
    </>
  );
}
