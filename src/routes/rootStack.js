import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackScreen } from 'react-native-screens';
import HomeScreen from '../telas/home';
import Login from '../telas/login';
import CadUsuario from '../telas/cadUsuario';
import RecSenha from '../telas/recSenha';
import MyTabs from './myTabs';


const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="login"
      screenOptions={
        {
          headerStyle: {
            backgroundColor: 'tomato'
          },
        }
      }
    >
      <Stack.Screen
        name="login"
        component={Login}
        options={{ title: 'Login' }}
      />

      <Stack.Screen
        name="home"
        component={MyTabs}
        options={{ 
          title: 'Home', 
          headerShown: false 
        }}
      />

      <Stack.Screen
        name="cadUsuario"
        component={CadUsuario}
        options={{ title: 'Cadastro de usuario' }}
      />

      <Stack.Screen
        name="recsenha"
        component={RecSenha}
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#a70b92',
          },
          headerTintColor: '#cbdf14',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}