import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeStack from "./HomeStack"
import Conta from "./Conta";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const RouteProva2 = ()=>{

    return(

            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;

                        if (route.name === 'Inicio') {
                            iconName = "home-outline"

                        } else if (route.name === 'Conta') {
                            iconName = "person-outline"
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'red',
                    tabBarInactiveTintColor: 'black',
                })}>
                <Tab.Screen name="Inicio" component={HomeStack}/>
                <Tab.Screen name="Conta" component={Conta}/>

            </Tab.Navigator>

    );
}

export default RouteProva2;