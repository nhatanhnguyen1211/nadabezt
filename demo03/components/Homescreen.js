import React from 'react';

import {Button,StyleSheet} from 'react-native'


const Homescreen = (props) => {
    const {navigation} = props
    const params = {name: 'Nguyen Nhat Anh', age: '18'}
    return(
        <>
        <Button  
            title="Go to Hello Scren"
            onPress={() => navigation.navigate('HelloScreen', params)}
        />
         <Button 
            title="Go to FlatList Scren"
            onPress={() => navigation.navigate('FlatListScreen')}
        />
          <Button 
            title="Go to Lab3"
            onPress={() => navigation.navigate('Lab3')}
        />
        <Button 
            title="Go to Image"
            onPress={() => navigation.navigate('ImagesScreen')}
        />
        <Button 
            title="Go to ScrollView"
            onPress={() => navigation.navigate('ScrollViewScreen')}
        />
         <Button 
            title="Go to Login"
            onPress={() => navigation.navigate('Login')}
        />
        <Button 
            title="Go to LAB 2"
            onPress={() => navigation.navigate('Lab2')}
        />
        <Button 
            title="Go to FlatList 2"
            onPress={() => navigation.navigate('FlatList2')}
        />
         <Button 
            title="Go to FetchDataScreen "
            onPress={() => navigation.navigate('FetchDataScreen')}
        />
         <Button 
            title="Go to ButtonSceen "
            onPress={() => navigation.navigate('ButtonSceen')}
        />
        <Button 
            title="Go to AnimationScreen "
            onPress={() => navigation.navigate('AnimationScreen')}
        />
        </>
    )
}

export default Homescreen;

const styles = StyleSheet.create({
    button:{
        marginBottom: 30
    }
})