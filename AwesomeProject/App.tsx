import React from 'react';
import {View, ScrollView, Image, StyleSheet, Text} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>Static Resource / Local Image</Text>
        {/* <Image
          source={require('./assets/pngwing.com.png')} // simpan gambar di folder project /assets
          style={styles.image}
        /> */}

        <Text style={styles.title}>Network Image</Text>
        <Image
          source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
          style={styles.image}
        />

        <Text style={styles.title}>Base64 Image</Text>
        <Image
          source={{
            uri:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA' +
              'AAAFCAYAAACNbyblAAAAHElEQVQI12P4' +
              '//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==',
          }}
          style={styles.image}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 16,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
  },
});

export default App;
