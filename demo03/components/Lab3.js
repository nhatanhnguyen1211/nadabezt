import React, {useState} from 'react';
import {Text,StyleSheet} from 'react-native'

const Lab3 = () => {
    const [ content, setContent] = useState('')
    const login = () => {
        setContent('Login success')
    }
    const signup = () => {
        setContent('Signup success')
    }
    return(
        <>
            <Text style={styles.text}>Welcome</Text>
            <Text style={styles.text, styles.login} 
                    onPress={login}>Login</Text>
            <Text style={styles.text, styles.signup} 
                    onPress={signup}>Signup</Text>
            <Text style={styles.text}>{content}</Text>
        </>
    )

}

export default Lab3

const styles = StyleSheet.create({
    text: {
        fontSize:30
    },
    login:{
        fontSize: 30,
        backgroundColor: 'red',
        color: 'white',
        textAlign: 'center',
        margin: 20,
        borderRadius: 20
    },
    signup:{
        fontSize: 30,
        backgroundColor: 'orange',
        color: 'white',
        textAlign: 'center',
        margin: 40,
        borderRadius: 20 

    }
})