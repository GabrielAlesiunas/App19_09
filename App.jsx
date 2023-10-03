import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons} from '@expo/vector-icons';
import Cadastrar from './components/cadastrar';
import Listar from './components/Listar';



const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator>
      <Tabs.Screen 
      name='Cadastrar'
      component={Cadastrar}
      options={{
        tabBarIcon:(color, size)=>(<Ionicons name="add-circle-outline" size={size} color={color} />)
      }}
      />
       <Tabs.Screen 
      name='Listar'
      component={Listar}
      options={{
        tabBarIcon:(color, size)=>(<Ionicons name="add-circle-outline" size={size} color={color} />)
      }}
      />
      </Tabs.Navigator>
  </NavigationContainer>
  );
}
