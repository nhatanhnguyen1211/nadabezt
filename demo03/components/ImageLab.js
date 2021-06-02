import React, {useState} from 'react';
import {Text,StyleSheet, Alert, Image, Button, 
    ScrollView,
    View, ToastAndroid} from 'react-native'

const Login = () => {
    
    

    return(
        <>
         <Text style={styles.text}>Nguyen Van 1</Text>
                <Image 
                    style={styles.image}
                    source={require('../image/1.jpg'
                    
                        
                    )}
                    
                />
            
        </>
    )

}

export default Login

const styles = StyleSheet.create({
    image:{
        width: 428,
        height: 355,
        resizeMode: 'cover'
    },
    text: {
        fontSize:60,
        color: '#6E6E6E',
        marginBottom: 24,
        
    },
})