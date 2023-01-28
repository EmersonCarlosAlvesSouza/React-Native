import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Adicionar from './pages/Adicionar/registroPatrimonio';
import Buscar from './pages/Buscar';
import Verificar from './pages/Verificar';
import PatrimonioCadastrado from "./pages/PatrimonioCadastrado";

import {Ionicons} from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <Tab.Navigator
        screenOptions={
            {
            tabBarShowLabel:false,
            tabBarStyle:{
                    backgroundColor: 'purple',
                }
            }}
        >
        <Tab.Screen 
            name = "Buscar" 
            component={Buscar} 
            options={{
                headerShown:false,
                tabBarIcon: ({ color, size, focused }) => {
                    if(focused){
                        return <Ionicons name="search" size={size} color={color} />
                    }
                    
                    return <Ionicons name="search-outline" size={size} color={color} />
              }
            }}
        />


            <Tab.Screen 
                name = "Adicionar" 
                component={Adicionar}
                options={{
                    headerShown:false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if(focused){
                            return <Ionicons name="add-circle" size={size} color={color} />
                        }
                        
                        return <Ionicons name="add-circle-outline" size={size} color={color} />
                  }
                }}
            />


            <Tab.Screen 
                name = "Verificar" 
                component={Verificar}
                options={{
                    headerShown:false,
                    tabBarIcon: ({ color, size, focused }) => {
                        if(focused){
                            return <Ionicons name="checkbox" size={size} color={color} />
                        }
                        
                        return <Ionicons name="checkbox-outline" size={size} color={color} />
                  }
                }}
            />


        </Tab.Navigator>
    )
}

