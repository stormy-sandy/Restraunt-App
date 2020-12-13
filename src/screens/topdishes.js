import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ImageBackground,
} from 'react-native';
import Unorderedlist from 'react-native-unordered-list';
import BgImg from '../image/box7.jpeg';

function Topdishes(props) {
  return (
    <View style={styles.item}>
      <ImageBackground source={BgImg} style={styles.image}>
        <Text style={styles.title}>{'Top dishes'}</Text>
        <View
          style={{
            marginLeft: 10,
          }}>
          <Unorderedlist>
            <Text style={{color: '#ffaa88',fontSize:20}}>Top dish name</Text>
          </Unorderedlist>
          <Unorderedlist>
            <Text style={{color: '#ffaa88',fontSize:20}}>Top dish name</Text>
          </Unorderedlist>
          <Unorderedlist>
            <Text style={{color: '#ffaa88',fontSize:20}}>Top dish name</Text>
          </Unorderedlist>
          <Unorderedlist>
            <Text style={{color: '#ffaa88',fontSize:20}}>Top dish name</Text>
          </Unorderedlist>
          <Unorderedlist>
            <Text style={{color: '#ffaa88',fontSize:20}}>Top dish name</Text>
          </Unorderedlist>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
    height: 320,
  },
  title: {
    fontSize: 32,
    color: 'yellow',
  },
  image: {
    height: '100%',
    height: '100%',
    padding: 20,
  },
});

export default Topdishes;
