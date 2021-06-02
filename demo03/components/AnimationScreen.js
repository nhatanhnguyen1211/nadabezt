import React, {useState, useEffect, useRef} from 'react';
import {Text, StyleSheet,View,Button, FlatList,Image, Animated} from 'react-native'
import { Easing } from 'react-native-reanimated';
import { exp } from 'react-native/Libraries/Animated/Easing';



const Animation = () => {
    const fade = useRef(new Animated.Value(0)).current;
    const fadeIn = () => {
        Animated.timing(fade, {
            toValue :1,
            duration: 5000,
            useNativeDriver: true
            // easing: Easing.ease
        }).start()
    }
    const fadeOut = () => {
        Animated.timing(fade, {
            toValue :0,
            duration: 1000,
            useNativeDriver: true
        }).start()
    }
    return (
        <>
        {/* <Animated.View style={[styles.container,{opacity: fade}]}>
            <Text style={styles.text}>hello everyone</Text>

        </Animated.View> */}
        <Animated.Image 
            style={[styles.img,
                {
                    position : 'absolute',
                    top: 100,
                    left: 50,
                    width: 50,
                    height:50,
                    transform: [
                        {
                            translateX: fade.interpolate({
                                inputRange:[0, 1],
                                outputRange: [0, 100]
                            })
                        },
                        {
                            translateY: fade.interpolate({
                                inputRange:[0, 1],
                                outputRange: [0, 25]
                            })
                        }
                    ]
                }]}
            source={require('../image/1.jpg')}

        />
        {/* <Button title='Fade in' onPress={fadeIn}/>
        <Button title='Fade Out' onPress={fadeOut}/> */}
        <Button title='Resize Img' onPress={resizeImg}/> 
        </>
    )

}

export default Animation

const styles = StyleSheet.create({


    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // opacity: fade
    },
    
    
    text: {
        fontSize: 30,
        backgroundColor: '#F2F5A9',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
      img:{
          resizeMode: 'cover' , 
          width: 55,
          height: 55,
      }
})
