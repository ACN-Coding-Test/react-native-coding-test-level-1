import { StyleSheet } from "react-native";

//STYLING
export const formStyle = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#C7C7CD",
    paddingTop: 30,
    padding: 15,
  },
  textInput: {
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    backgroundColor: "white",
    marginBottom: 10,
  },
  dateInput: {
    height: 50,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    justifyContent: "center",
  },
  submitButton: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "orange",
    width: 100,
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  modalWrapper: {
    flex: 1,
    backgroundColor: "rgba(229, 229, 229, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    height: 200,
    width: "60%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
  },
  modalTitle: {
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
});
