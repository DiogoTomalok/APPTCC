import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Importando com a primeira letra maiúscula (Boa prática)
import Home from './telas/tela_home';
import Perfil from './telas/tela_perfil';
import Sede from './telas/tela_sede';
import Time from './telas/tela_time';
import Test from './telas/tela_test'; 
import {Entypo, Feather} from '@expo/vector-icons'

const Tab = createBottomTabNavigator(); 
export default function Routes() {
    return (
        <Tab.Navigator
            
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: '#121212',
                    borderTopWidth: 0, 
                },
                tabBarActiveTintColor: '#FFF', 
                tabBarInactiveTintColor: '#777', 
                headerShown: false,
                
            }}
        >
           
                       <Tab.Screen 
                name="Menu" 
                component={Home}
                options={{
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="home" size={size} color={color} />
                    )
                }}
            />


            <Tab.Screen 
            name="Perfil" 
            component={Perfil} />

            <Tab.Screen 
            name="Sede" 
            component={Sede} />

            <Tab.Screen 
            name="Time" 
            component={Time} />

            <Tab.Screen 
            name="Test" 
            component={Test} />

        </Tab.Navigator>
    );
}