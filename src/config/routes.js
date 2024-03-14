import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/Home";
import Adicionar from "../pages/Adicionar";
import Pesquisar from "../pages/Pesquisar";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#171626",
          borderTopWidth: 0,

          elevation: 0,
          height: 50,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "home-outline" : "home"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Adicionar"
        component={Adicionar}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "add-circle" : "add"}
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Pesquisar"
        component={Pesquisar}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons
              name={focused ? "search-outline" : "search"}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Routes;
