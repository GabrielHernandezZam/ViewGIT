import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'
import { Platform } from 'react-native';

//Pantallas 
import Menu from './screens/Menu'
import Horario from './screens/Horario'
import Calificaciones from './screens/Calificaciones'
import Kardex from './screens/Kardex'
import AjustesUsuario from './screens/AjustesUsuario'

const Tab = createBottomTabNavigator();
  const screenOptions = {
  tabBarShowLabel:false,
  headerShown:false,
  tabBarStyle:{
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    background: "#fff"
  }
}

export default function App() {
  return (
     <NavigationContainer>
       <Tab.Navigator screenOptions={screenOptions}>
       <Tab.Screen 
              name="Menu" 
              component={Menu} 
              options={{
                tabBarIcon: ({focused})=>{
                  return (
                    <View
                    style={{
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#16247d",
                      width: Platform.OS == "ios" ? 50 : 60,
                      height: Platform.OS == "ios" ? 50 : 60,
                      top: Platform.OS == "ios" ? -10 : -20,
                      borderRadius: Platform.OS == "ios" ? 25 : 30
                    }}
                    >
                      <FontAwesome name="address-card" size={24} color="#fff" />
                    </View>
                  )
                }
              }}
              />
          <Tab.Screen 
          name="Horario" 
          component={Horario} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                  <Entypo name="calendar" size={24} color={focused ? "#16247d": "#111"} />
                  <Text style={{fonSize: 12, color: "#16247d"}}>Horario</Text>
            </View>
              )
            }
          }}
          />
          <Tab.Screen 
          name="Boleta" 
          component={Calificaciones} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                 <Entypo name="edit" size={24} color={focused ? "#16247d": "#111"} />
                  <Text style={{fonSize: 12, color: "#16247d"}}>Calificaciones</Text>
            </View>
              )
            }
          }}
          />
          <Tab.Screen 
          name="Ajustes" 
          component={AjustesUsuario} 
          options={{
            tabBarIcon: ({focused})=>{
              return (
                <View style={{alignItems: "center", justifyContent: "center"}}> 
                 <Ionicons name="settings" size={24}  color={focused ? "#16247d": "#111"} />
                  <Text style={{fonSize: 12, color: "#16247d"}}>Ajustes</Text>
            </View>
              )
            }
          }}
          />
       </Tab.Navigator>
     </NavigationContainer>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
