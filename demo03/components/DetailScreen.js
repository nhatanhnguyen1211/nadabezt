import React, {useState} from 'react';
import {Text, StyleSheet,View,Button, FlatList,Image} from 'react-native'


const Detail = props => {
    const {route: {params}} = props
    console.log('>>>>>>>>',params)
    return (
        <>
        <View>
        
        <Text style={styles.text}> {params.title}</Text>
        <Image
            style={styles.img}
            source={params.avatar}
        />

        
        </View>
        </>
    )
}

export default Detail

const styles = StyleSheet.create({
    
    
    text: {
        fontSize: 50,
        backgroundColor: '#F2F5A9',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
      img:{
          width: 366,
          height: 366,
      }
})
