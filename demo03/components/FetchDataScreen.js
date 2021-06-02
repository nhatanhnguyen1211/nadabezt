import React, {useState, useEffect} from 'react';
import {Text, StyleSheet,View,Button, FlatList,Image} from 'react-native'


const renderItem= (props) => {
    const {item} = props
    return(
        <View> 
            <Image 
                style={styles.img}
                source={{uri: item.avatar}}
            />
            <Text style={styles.title}> {item.content}</Text>
        </View>
    )

}

const FetchData = props => {
        const [data, setData] = useState([])
        useEffect(() => {
            fetch('https://60af0c715b8c300017deb8c8.mockapi.io/posts')
            .then(res =>res.json())
            .then(json => {
              
                const arr = [].concat(json)
                setData(arr)
            })
            .catch(err => console.log(err))
        }, [])
    return(

            

        <FlatList 
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
        />
    )

}

export default FetchData

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
        backgroundColor: '#F2F5A9',
      },
      img:{
          width: 366,
          height: 366,
      }
})