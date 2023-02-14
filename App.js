import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  Pressable,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const bruschetta = require("./assets/bruschetta.png");

function HomeScreen({ navigation }) {
  const [text, setText] = useState("");
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={styles.header}>Bruschetta Recipe</Text>
      <Image source={bruschetta}></Image>
      <TextInput
        style={styles.inputStyle}
        placeholder="Number of Servings"
        onChangeText={(newText) => setText(newText)}
      ></TextInput>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Recipe", { servings: text })}
      >
        <Text style={styles.buttonText}>View Recipe</Text>
      </Pressable>
    </View>
  );
}

function RecipeScreen({ route, navigation }) {
  const { servings } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bruschetta</Text>
      <Text style={styles.section}>Ingredients</Text>
      <Text style={styles.text}>{JSON.parse(servings) * 4} plum tomatoes</Text>
      <Text style={styles.text}>{JSON.parse(servings) * 6} basil leaves</Text>
      <Text style={styles.text}>{JSON.parse(servings) * 3} garlic cloves, chopped</Text>
      <Text style={styles.text}>{JSON.parse(servings) * 3} TB olive oil</Text>
      <Text style={styles.section}>Directions</Text>
      <Text style={styles.text}>Combine the ingredients, add salt to taste. Top French bread slices with mixture</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Healthy Recipes">
        <Stack.Screen name="Healthy Recipes" component={HomeScreen} options={{headerStyle: {backgroundColor: '#f4511e'}}} />
        <Stack.Screen name="Recipe" component={RecipeScreen} options={{headerStyle: {backgroundColor: '#f4511e'}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    Width: 200,
    padding: 10,
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: "grey",
    marginBottom: 20,
  },
  buttonText:{
    color: 'white',
    fontWeight: 'bold'
  },
  header:{
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign:'center',
  },
  section:{
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 10,
    textAlign: 'left',
  },
  text:{
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 40,
  },
  container:{
    marginTop: 130,
  },
  inputStyle:{
    padding: 10,
    height: 40,
    width: 200,
    color: 'grey',
    fontWeight: 'bold',
    fontSize:20,
    alignContent: 'center',
    marginBottom: 30,
    marginTop: 30,
  },
});
export default App;
