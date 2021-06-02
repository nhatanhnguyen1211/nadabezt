import React, {useState, useEffect} from 'react';
import { Pressable,Text, StyleSheet,View,Button, FlatList,Image, TouchableOpacity} from 'react-native'


const ButtonScreen = props => {
    const [timesPressed, setTimesPressed] = useState(0);

    return(

        <>
        <View>
            <TouchableOpacity onPress={() => {}}>
                <View style={styles.button}>

                </View>
            </TouchableOpacity>
    
            
        </View>
        
            <View>
                <Button  
                color = 'pink'
                onPress={() => {}}
                    title=' click meeee' />
            </View>
    <View>
         <Pressable
        onPress={() => {
          setTimesPressed((current) => current + 1);
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : 'white'
          },
          styles.wrapperCustom
        ]}>
        {({ pressed }) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'Press Me'}
          </Text>
        )}
      </Pressable>
     </View>
            
        </>
    )

}

export default ButtonScreen

const styles = StyleSheet.create({


})