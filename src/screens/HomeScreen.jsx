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

  //* Memo
  // Component memo hooku kullanılmadan export edildiğinde main state her değiştiğinde alt componentlerde değişiklik olmasa bile render olur. Ancak memo kullanılarak export edildiği zaman sadece ilgili componentin propslarında bir değişiklik olduğu zaman render olur.

  //* useCallback useMemo
  // Bir fonksiyon props olarak başka bir sayfaya veri gönderdiğinde tıklanmasa bile o fonksiyonu render eder. Fakat useCallback ya da useMemo gibi fonksiyonlar kullanılırsa bu durum ortadan kalkar.

  //* Farkı
  // useCallback içerisinde fonksiyon çalıştırır.
  // const deneme = useCallback((parametre)) => {fonksiyon, []};

  // useMemo ise fonksiyonu çağırır.
  // const deneme = useMemo(() => fonsiyon,[fonksiyonun ne zaman çağrılacağının belirtisi])

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text
          testID="appTitle"
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
