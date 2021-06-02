import React from 'react';

import {View, FlatList, Text, StyleSheet,ScrollView,Image} from 'react-native'



const data = [
    { id: 1, name: 'Nguyen Nhat Anh'},
    { id: 2, name: 'Nguyen Nhat Trung'},
    { id: 3, name: 'Nguyen Nhat Nam'},
    { id: 4, name: 'Nguyen Nhat Thanh'},
    { id: 5, name: 'Nguyen Nhat Hung'},
    { id: 6, name: 'Nguyen Nhat Van'} ,  
]

const renderItem = (props) => {
    const {item: {name}} = props
    const {navigation} = props
    return (
        <>
        <ScrollView> 
        <View>
            <Text onPress>{name}</Text>
            <Image 
                    style={styles.image}
                    source={require('../image/1.jpg'
                    )}
                    
                />
        </View>
    
    </ScrollView>
    </>
    )
}

const MyFlatList = () => {
    return (
        <FlatList 
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
        />
    )
  
}



export default MyFlatList

const styles = StyleSheet.create({
    item:{
        backgroundColor: 'red',
        color: 'white',
        fontSize: 30
    },
    image:{
        width: 428,
        height: 355,
        resizeMode: 'cover'
    },
})
