import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default styles = StyleSheet.create({
  app: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
  },
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    backgroundColor: "white",
  },
  login: {
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  loginTitle: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  loginButton: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "green",
    padding: 10,
    width: 200,
    borderRadius: 5,
  },
  loginButtonText: {
    textAlign: "center",
    fontSize: 20,
    color: "white",
  },
  headerBar: {
    height: 80,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "green",
    padding: 20,
  },
  headerBarText: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  appName: {
    color: "white",
    fontSize: 36,
    fontWeight: "bold",
    marginLeft: 12,
  },

  contentBooks: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch",
    margin: 18,
  },
  contentFormBooks: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  titleFormBook: {
    textAlign: "center",
    backgroundColor: "green",
    marginBottom: 20,
    padding: 20,
  },
  bookHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",

    height: 60,
    marginBottom: 20,
    backgroundColor: "green",
  },
  bookAddButton: {
    borderRadius: 10,
    backgroundColor: "green",
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  listBooksInfo: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "green",
    width: "100%",
    padding: 5,
    alignItems: "center",
  },
  infoBlock: {
    display: "flex",
    flexDirection: "row",
  },
  titleBlock: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconsBlock: {
    display: "flex",
    flexDirection: "row",
  },
  iconImg: {
    resizeMode: "stretch",
    height: 15,
    width: 15,
  },
  onlyReads: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  // títulos
  h1: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  h2: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  h3: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },

  // Margins
  m1: {
    margin: 5,
  },
  m2: {
    margin: 10,
  },
  mr: {
    marginRight: 10,
  },
  mb: {
    marginBottom: 10,
  },

  // Listas
  li: {
    display: "flex",
    flexDirection: "column",

    width: "100%",
    marginBottom: 20,
  },
  liTitleBook: {
    fontSize: 24,
    fontWeight: "bold",
    color: "black",
  },
  liText: {
    fontSize: 14,
    color: "white",
  },
  liLabel: {
    marginRight: 4,
    fontWeight: "bold",
  },

  // Buttons
  button: {
    width: 15,
    height: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },

  // Form
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttonForm: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  field: {
    height: 40,
    width: 200,
    borderRadius: 10,
    paddingLeft: 10,
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "white",
  },
  checkbox: {
    borderColor: "black",
    borderWidth: 2,
    height: 20,
    width: 20,
  },
});
