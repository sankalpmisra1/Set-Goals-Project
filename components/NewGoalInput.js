import React, { useState } from 'react'
import { StyleSheet, TextInput,View,Button } from 'react-native'

export default function NewGoalInput(props) {
    const [enteredInputTextGoal,setInputTextGoal]=useState('');
    function addInputTextGoal(enteredTextGoal){
        setInputTextGoal(enteredTextGoal);
    }
    function addInputTextHandler(){
        props.onAddNewGoal(enteredInputTextGoal);
        setInputTextGoal('');
    }
  return (
    <View>
        <TextInput style={styles.textInputStyle} placeholder='Please Enter here...' onChangeText={addInputTextGoal} value={enteredInputTextGoal}/>
        <Button title='Submit..' onPress={addInputTextHandler}/>
    </View>
  )
}


const styles = StyleSheet.create({
    textInputStyle:{
        borderWidth:1,
        borderColor:'black',
        width:"70%",
        marginRight:8,
        padding: 8,
        backgroundColor:'#fae5d3'
    }
})