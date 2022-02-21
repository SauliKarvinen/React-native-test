import { StyleSheet } from "react-native";

const styles = (props) => {
  return StyleSheet.create({
    root: {
      backgroundColor: "white",
      height: "100%",
      width: "100%",
      display: "flex",
    },

    alapalkki: {
      bottom: 0,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
    },

    button: {
      backgroundColor: "#4938ff",
      width: 90,
      height: 40,
      borderRadius: 8,
      shadowColor: "white",
      shadowOpacity: 0.5,
      shadowOffset: { width: 0, height: 1 },
      shadowRadius: 1,
      margin: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    buttonArea: {
      /* position: "absolute",
      top: 80, */
      marginTop: 10,
      alignSelf: "center",
    },

    card: {
      width: "90%",
      height: 80,
      alignSelf: "center",
      elevation: 10,
      margin: 10,
    },

    centerArea: {
      display: "flex",
      padding: 20,
    },

    count: {
      color: "white",
      alignSelf: "center",
      marginTop: 20,
      fontSize: 20,
    },

    icons: {},

    newBox: {
      alignSelf: "center",
      borderWidth: 1,
      backgroundColor: "red",
      height: 100,
      width: 100,
      margin: 20,
      justifyContent: "center",
      borderRadius: 10,
    },

    palkit: {
      height: 40,
      width: "100%",
      backgroundColor: "red",
      //position: "absolute",

      borderRadius: 10,
      /* shadowColor: "grey",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8, */
      borderWidth: 2,
    },

    touchText: {
      color: "white",
      textAlign: "center",

      fontSize: 20,
    },
    ylapalkki: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
    },
  });
};

export default styles;
