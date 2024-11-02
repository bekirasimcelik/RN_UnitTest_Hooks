import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState, useCallback, useMemo} from 'react';
import PersonCard from '../components/PersonCard';
import {data} from '../utils/Constants';

const HomeScreen = () => {
  const [isGreen, setIsGreen] = useState(false);
  const [title, setTitle] = useState('Kişi Listesi');
  const [age, setAge] = useState(0);

  // const setAppTitle = willSetTitle => {
  //   for (let i = 0; i < 100000; i++) {}

  //   setTitle(willSetTitle);
  // };

  const cachedSetAppTitle = useCallback(willSetTitle => {
    for (let i = 0; i < 100000; i++) {}

    setTitle(willSetTitle);
  }, []);

  const handleSetAge = () => {
    for (let i = 0; i < 1000000; i++) {}

    return age + 10;
  };

  const cachedSetAge = useMemo(() => handleSetAge(), [age]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text
          style={[styles.title, {color: isGreen ? '#16c784' : 'white'}]}
          onPress={() => setIsGreen(!isGreen)}>
          {title}
        </Text>
        <Text style={styles.title}>{cachedSetAge}</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <PersonCard
            setTitle={cachedSetAppTitle}
            setAge={setAge}
            personInfo={item}
          />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: 'white',
  },
});
