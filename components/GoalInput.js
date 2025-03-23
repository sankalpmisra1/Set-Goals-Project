import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal,Image } from "react-native";
function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  function goalInputHandler(enteredText) {
    console.log(enteredText);
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    console.log("Button called....");
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/pngwing.png')} style={styles.image}/>
        <TextInput
          style={styles.textInput}
          placeholder="Enter here.."
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
            <Button title="Submit" onPress={addGoalHandler} color='#5e0acc' />
            </View>
            <View style={styles.button}>
            <Button title="Cancel" onPress={props.onCancel} color='#f31282'/>
            </View>


        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#311b6b",
    marginBottom: 24,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    width: "90%",
    marginRight: 8,
    padding: 8,
    backgroundColor: "white",
  },
  buttonContainer:{
    marginTop:8,
    flexDirection:'row'
  },
  button:{
    width:100,
    marginHorizontal:8
  },
  image:{
    width:200,
    height:200,
    margin:20,
    borderRadius:5
  }
});
