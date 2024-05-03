import { useNavigation } from '@react-navigation/native';
import {Text, View, TextInput, Button} from 'react-native'
import {StyleSheet} from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { login } from '../redux/slices/loginslice';
export const LoginScreen = () => {
    const loginData = useSelector((state: RootState) => state.login.data)
    const dispatch = useDispatch();
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{backgroundColor: 'white', padding: 20}}>
                <TextInput 
                    placeholder='Username'
                />
                <TextInput 
                    placeholder='Password'
                />

                <Button title='Login' onPress={() => {
                //    navigation.replace('inapp')
                    dispatch(login())
                }}/>

                <Text onPress={() => {
                    navigation.navigate('register')
                }}>Register</Text>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#46cdfa',
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        padding: 20,
    }
});