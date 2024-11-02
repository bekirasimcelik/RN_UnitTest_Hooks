import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const imageUrl =
  'https://images.unsplash.com/photo-1730304053583-f0660928f2f4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOXx8fGVufDB8fHx8fA%3D%3D';

const PersonCard = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.leftSide}>
        <View style={styles.imageContainer}>
          <Image style={styles.imageStyle} source={{uri: imageUrl}} />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>Bekir Asım Çelik</Text>
          <Text style={styles.job}>React Native Developer</Text>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.name}>Erkek</Text>
        <Text style={styles.yas}>25</Text>
      </View>
    </View>
  );
};

export default PersonCard;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 15,
    paddingVertical: 10,
    margin: 15,
    borderRadius: 10,
  },
  imageContainer: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    objectFit: 'cover',
  },
  imageStyle: {
    width: '100%',
    height: '100%',
  },
  infoContainer: {
    marginBottom: 40,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 10,
    color: 'white',
  },
  job: {
    color: 'gray',
    fontSize: 10,
    fontWeight: '800',
  },
  leftSide: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  yas: {
    color: 'gray',
  },
});
