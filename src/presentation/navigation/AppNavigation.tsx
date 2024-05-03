import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen } from "../pages/Login";
import { RegisterScreen } from "../pages/Register";
import { HomeScreen } from "../pages/Home";
import { PostScreen } from "../pages/Posts";
import { ProfileScreen } from "../pages/Profile";
import { SettingScreen } from "../pages/Setting";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/FontAwesome'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="auth" component={AuthNavigation}/>
                <Stack.Screen name="inapp" component={InapNavigation}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const AuthNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="login" component={LoginScreen}/>
            <Stack.Screen name="register" component={RegisterScreen}/>
        </Stack.Navigator>
    );
}

const InapNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    if(route.name === 'home') {
                        iconName = 'home';
                    } else if(route.name === 'posts') {
                        iconName = 'list';
                    } else if(route.name === 'profile') {
                        iconName = 'user';
                    } else if(route.name === 'setting') {
                        iconName = 'gear';
                    }
                    return <Icon name={iconName} color={color} size={20}/> 
                },
                tabBarActiveTintColor: '#39B78D',
                tabBarInactiveTintColor: 'gray'
            })}
        >
            <Tab.Screen name="home" component={HomeScreen}/>
            <Tab.Screen name="posts" component={PostScreen}/>
            <Tab.Screen name="profile" component={ProfileScreen}/>
            <Tab.Screen name="setting" component={SettingScreen}/>
        </Tab.Navigator>
    );
}