import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const Exercise7 = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox2} />
        <View style={styles.redBox} />
      </View>
      <View style={styles.container2}>
        <Image
          source={require('./assets/logo-with-motto-3.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.container3}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>
    </>
  );
};

export default Exercise7;

const styles = StyleSheet.create({
  container: {
    flex: 1 / 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  blackBox: {
    height: 80,
    width: 80,
    backgroundColor: 'black',
  },
  yellowBox: {
    height: 80,
    width: 80,
    backgroundColor: 'yellow',
  },
  blackBox2: {
    height: 80,
    width: 80,
    backgroundColor: 'black',
  },

  container2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'White',
  },

  container3: {
    flex: 1 / 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
  redBox: {
    height: 50,
    width: 50,
    backgroundColor: 'red',
  },
  greenBox: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
  },
  blueBox: {
    height: 50,
    width: 50,
    backgroundColor: 'blue',
  },
  logo: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
