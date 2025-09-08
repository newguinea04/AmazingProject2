import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';

const Exercise3 = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Foto di atas */}
      <Image source={require('./assets/foto_saya.jpg')} style={styles.photo} />

      {/* Biodata */}
      <View style={styles.card}>
        <Text style={styles.title}>Biodata Saya</Text>
        <Text style={styles.label}>
          Nama: <Text style={styles.value}>Newguinea Ratu Pangalila</Text>
        </Text>
        <Text style={styles.label}>
          Tempat/Tanggal Lahir:{' '}
          <Text style={styles.value}>Timika, 04 Agustus 2005</Text>
        </Text>
        <Text style={styles.label}>
          Alamat: <Text style={styles.value}>Asrama Universitas Klabat</Text>
        </Text>
        <Text style={styles.label}>
          Email: <Text style={styles.value}>newguinea@example.com</Text>
        </Text>
        <Text style={styles.label}>
          Hobi: <Text style={styles.value}>Dance dan Menyanyi</Text>
        </Text>
        <Text style={styles.label}>
          Jurusan: <Text style={styles.value}>Ilmu Komputer</Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default Exercise3;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  photo: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 12,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 6,
  },
  value: {
    fontWeight: 'normal',
    color: '#333',
  },
});
