import React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';

//Komponen adalah fungsi yg mengembalikan JSX
const App = () => {
  // Contoh string base64 (gambar kecil kotak hitam)
  const base64Image =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==';

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>Basic React Native</Text>
      </View>

      <View style={styles.container2}>
        <Text style={styles.title2}>Kotak Baru</Text>
      </View>

      {/* Menampilkan gambar base64 */}
      <Image
        source={require('./assets/pngwing.com.png')}
        style={styles.image}
      />

      <Image
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
        style={styles.image}
      />

      {/* Menampilkan gambar dari Base64 */}
      <Image
        source={{
          uri: base64Image,
        }}
        style={styles.image}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  title: {
    backgroundColor: 'yellow',
    color: 'red',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: '600',
  },
  container: {
    backgroundColor: 'blue',
    borderColor: 'black',
    borderWidth: 5,
    padding: 15,
    margin: 15,
  },

  title2: {
    backgroundColor: 'green',
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '600',
  },
  container2: {
    backgroundColor: 'red',
    borderColor: 'blue',
    borderWidth: 5,
    width: 100,
    height: 100,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 120,
    height: 120,
    margin: 10,
    borderRadius: 10,
  },
});
