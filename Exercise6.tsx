import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from './components/Button';
import TextInput from './components/TextInput';

const Registration = () => {
  const [title, setTitle] = useState('Registration');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const onRegister = () => {
    console.log({
      name,
      username,
      email,
      address,
      phoneNumber,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        placeholder="Masukan nama lengkap anda"
        label="Name"
        onChangeText={setName}
      />
      <TextInput
        placeholder="Masukan username anda"
        label="Username"
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Masukan email anda"
        label="Email"
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Masukan alamat anda"
        label="Address"
        onChangeText={setAddress}
      />
      <TextInput
        placeholder="Masukan Nomor telepon anda"
        label="Phone Number"
        onChangeText={setPhoneNumber}
        keyboardType="numeric"
      />
      <Button
        label="Register"
        color="#9B59B6"
        colorText="#ffffff"
        onPress={onRegister}
      />
    </View>
  );
};

export default Registration;

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 40,
  },
});
