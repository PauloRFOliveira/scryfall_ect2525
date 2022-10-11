import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/HomeScreen";
import DecklistScreen from "./screens/DecklistScreen";
import CardScreen from "./screens/CardScreen";

const Stack = createStackNavigator();

export default function App() {
  return (

      <NavigationContainer>

        <Stack.Navigator>

          <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>
          <Stack.Screen name="DecklistScreen" component={DecklistScreen} options={{title: "Decklist"}}/>
          <Stack.Screen name="CardScreen" component={CardScreen} options={{title: "Card"}}/>

        </Stack.Navigator>

      </NavigationContainer>
  );
}