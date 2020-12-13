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
import BgImg from '../image/back.jpg';
import Topdishes from './topdishes'



const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'North indian',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Chinese',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Mediterranen',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'South indian',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Italian',
  },
];

const Item = ({title}) => (
  <View style={styles.item}>
    <ImageBackground source={BgImg} style={styles.image}>
      <Text style={styles.title}>{title}</Text>
      <View
        style={{
          marginLeft: 10,
        }}>
        <Unorderedlist>
          <Text>Buy some things</Text>
          <Unorderedlist>
            <Text>Eggs</Text>
          </Unorderedlist>
          <Unorderedlist>
            <Text>A guitar</Text>
          </Unorderedlist>
          <Unorderedlist>
            <Text>A bunny</Text>
            <Unorderedlist>
              <Text>a white one</Text>
            </Unorderedlist>
            <Unorderedlist>
              <Text>and a black one</Text>
            </Unorderedlist>
          </Unorderedlist>
        </Unorderedlist>
        <Unorderedlist bulletUnicode={0x2765}>
          <Text>Buy some books</Text>
          <Unorderedlist bulletUnicode={0x2023}>
            <Text>Kafka on the Shore</Text>
          </Unorderedlist>
          <Unorderedlist bulletUnicode={0x2023}>
            <Text>Animal Farm</Text>
          </Unorderedlist>
          <Unorderedlist bulletUnicode={0x2023}>
            <Text>The Art of Computer Programming</Text>
          </Unorderedlist>
        </Unorderedlist>
      </View>
  </ImageBackground>
    </View>
);

const HomeScreen = () => {
  const renderItem = ({item}) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal={true}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View>
      <Topdishes/>
      </View>
    </SafeAreaView>
  );
};

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
    color: 'blue',
  },
  image: {
    height: '100%',
    height: '100%',
    padding:20
  },
});

export default HomeScreen;
