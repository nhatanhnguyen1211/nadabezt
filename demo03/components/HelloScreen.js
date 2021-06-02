import React from 'react';
import {Text, StyleSheet,View,Button, FlatList,Image} from 'react-native'

const Home = (props) => {
    const button = () => {

    }
    
    return(

        <View>
        
        <Text style={styles.text}>Name {props.my_name}</Text>
       
        
        </View>
       
    )
}

const FlatListDemo = (props) => {
    const data = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'Nguyen Van 1',
          avatar: require('../image/1.jpg')
        },
        {
            id: 'bd7actya-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Nguyen Van 2',
            avatar:require('../image/2.jpg')
          },
          {
            id: 'bd7acyru-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Nguyen Van 3',
            avatar:require('../image/3.jpg')
          },
          {
            id: 'bd7atoea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Nguyen Van 4',
            avatar: require('../image/4.jpg')
          },
          {
            id: 'bd7rtbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Nguyen Van 5',
            avatar: require('../image/5.jpg')
          },
          {
            id: 'bd7jtbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Nguyen Van 6',
            avatar: require('../image/6.jpg')
          },
          {
            id: 'bd7qwbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Nguyen Van 7',
            avatar: require('../image/7.jpg')
          },
          {
            id: 'bd7fgbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Nguyen Van 8',
            avatar: require('../image/8.jpg')
          },
          {
            id: 'bd7wsbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Nguyen Van 9',
            avatar: require('../image/9.jpg')
          },
          {
            id: 'bd7ybbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Nguyen Van 10',
            avatar: require('../image/10.jpg')
          },
          {
            id: 'bd7asbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Nguyen Van 11',
            avatar: require('../image/11.jpg')
          },
          {
            id: 'bd7ppbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Nguyen Van 12',
            avatar: require('../image/12.jpg')
          },
          {
            id: 'bd7pobea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Nguyen Van 13',
            avatar: require('../image/13.jpg')
          },
          {
            id: 'bd7pibea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Nguyen Van 14',
            avatar: require('../image/14.jpg')
          },
          {
            id: 'bd7vbbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Nguyen Van 15',
            avatar: require('../image/15.jpg')
          },
          {
            id: 'bd7vlbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Nguyen Van 16',
            avatar: require('../image/16.jpg')
          },
          {
            id: 'bd7vcbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Nguyen Van 17',
            avatar: require('../image/17.jpg')
          },
          {
            id: 'bd7vcbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Nguyen Van 18',
            avatar: require('../image/18.jpg')
          },
          {
            id: 'bd7vdbea-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Nguyen Van 19',
            avatar: require('../image/19.jpg')
          },
          {
            id: 'bd7avdva-c1b1-46c2-aed5-3ad53abb28ba',
            title: 'Nguyen Van 20',
            avatar: require('../image/20.jpg')
          },
        
      ];
      const {navigation} = props
      const renderItem= (props) => {
          const {item} = props
          return(
              <View style={styles.item} 
              >
                  <Text onPress={() => navigation.navigate('DetailScreen', item)}
                   style={styles.title}> {item.title}</Text>
              </View>
          )

    }
    return(
        <FlatList 
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
        />
    )
}

const HelloScreen = (props) => {
    return (
        <>
        <FlatListDemo  navigation={props.navigation}/>
        </>
    )
}


export default HelloScreen


const styles = StyleSheet.create({
    text:{
        fontSize: 30,
        fontWeight: 'bold',
        color: 'blue'

    },
    
    item: {
        backgroundColor: '#58FAAC',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
})
