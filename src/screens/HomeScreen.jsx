import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState, useCallback} from 'react';
import PersonCard from '../components/PersonCard';
import {data} from '../utils/Constants';

const HomeScreen = () => {
  const [isGreen, setIsGreen] = useState(false);
  const [title, setTitle] = useState('Kişi Listesi');

  // const setAppTitle = willSetTitle => {
  //   for (let i = 0; i < 100000; i++) {}

  //   setTitle(willSetTitle);
  // };

  const cachedSetAppTitle = useCallback(willSetTitle => {
    for (let i = 0; i < 100000; i++) {}

    setTitle(willSetTitle);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text
          style={[styles.title, {color: isGreen ? '#16c784' : 'white'}]}
          onPress={() => setIsGreen(!isGreen)}>
          {title}
        </Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <PersonCard setTitle={cachedSetAppTitle} personInfo={item} />
        )}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'gray',
  },
  headerContainer: {
    backgroundColor: 'black',
    paddingHorizontal: 35,
    paddingVertical: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
  },
});
