import React, {useState} from 'react';
import {Text,StyleSheet, Alert, Image, 
    ScrollView, ToastAndroid,Button} from 'react-native'

const ScrollViewScreen = (props) => {
    const {navigation} = props
    return(
        <>
        <ScrollView>
       
            <Text style={styles.text} onPress={() => navigation.navigate('ImageLab')}>Nguyen Van 1</Text>
            <Text style={styles.text} onPress={() => navigation.navigate('ImageLab')}>Nguyen Van 2</Text>
            <Text style={styles.text}>Nguyen Van 3</Text>
            <Text style={styles.text}>Nguyen Van 4</Text>
            <Text style={styles.text}>Nguyen Van 5</Text>
            <Text style={styles.text}>Nguyen Van 6</Text>
            <Text style={styles.text}>Nguyen Van 7</Text>
            <Text style={styles.text}>Nguyen Van 8</Text>
            <Text style={styles.text}>Nguyen Van 9</Text>
            <Text style={styles.text}>Nguyen Van 10</Text>
            <Text style={styles.text}>Nguyen Van 11</Text>
            <Text style={styles.text}>Nguyen Van 12</Text>
            <Text style={styles.text}>Nguyen Van 13</Text>
            <Text style={styles.text}>Nguyen Van 14</Text>
            <Text style={styles.text}>Nguyen Van 15</Text>
            <Text style={styles.text}>Nguyen Van 16</Text>
            <Text style={styles.text}>Nguyen Van 17</Text>
            <Text style={styles.text}>Nguyen Van 18</Text>
            <Text style={styles.text}>Nguyen Van 19</Text>
            <Text style={styles.text}>Nguyen Van 20</Text>
            
            

        </ScrollView>
        </>
    )
}

export default ScrollViewScreen

const styles = StyleSheet.create({
   
    
    text: {
        fontSize:30,
        color: '#6E6E6E',
        marginBottom: 24,
        
    },

    image:{
        width: 355,
        height: 355,
        resizeMode: 'cover'
    }
    
})