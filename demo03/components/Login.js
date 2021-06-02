import React, {useState} from 'react';
import {Text,StyleSheet, Alert, Image, Button, 
    ScrollView,
    View, ToastAndroid} from 'react-native'

const Login = () => {
    const [ content, setContent] = useState('')
    const login = () => {
        setContent('Login success !!!')
    }
    const signup = () => {
        setContent('Sign Up success !!!')
    }

    return(
        <>
            <View style={styles.container}>
            <Text style={styles.text}>Welcome to ...</Text>
            <Text style={styles.text, styles.login} 
                    onPress={login}>Login</Text>
            <Text style={styles.text, styles.login} 
                    onPress={signup}>Sign Up</Text>
            <Text style={styles.text_content}>{content}</Text>
            </View>
        </>
    )

}

export default Login

const styles = StyleSheet.create({
    container: {
        
        backgroundColor: '#F8E0F7',
        flexDirection: 'column',
        justifyContent: 'center',
        flex: 1,
    },
    text: {
        fontSize:60,
        color: '#6E6E6E',
        marginBottom: 24,
        
    },
    login:{
        padding: 5,
        fontSize: 30,
        backgroundColor: '#FA58F4',
        color: '#6E6E6E',
        textAlign: 'center',
        marginTop: 5,
        borderRadius: 20,
        
      
        
    },
    text_content: {
        fontSize:15,
        color: '#585858',
        textAlign: 'center',
        marginTop: 150,
        
        
    }
  
})