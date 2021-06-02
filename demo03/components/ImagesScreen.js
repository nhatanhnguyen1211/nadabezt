import React, {useState} from 'react';
import {Text,StyleSheet, Alert, Image, 
    ScrollView} from 'react-native'


const ImagesScreen = () => {
        return (
            <>
                <Image
                    style={styles.image}
                    source={{
                        uri:'https://static.wikia.nocookie.net/onepiece/images/3/30/381772_1.jpg/revision/latest?cb=20200317133940&path-prefix=vi'
                    }}
                />
                <Image
                    style={styles.image}
                    source={require('../image/1.jpg'
                        
                    )}
                />
            </>
        )
}

export default ImagesScreen

const styles = StyleSheet.create({
    image:{
        width: 355,
        height: 355,
        resizeMode: 'cover'
    }
})