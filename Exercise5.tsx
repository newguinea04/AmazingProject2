import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TextInput from './components/TextInput';
import Button from './components/Button';

const Login = () => {
  const onSignIn = () => {
    console.log('Button di Klik');
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>

      <TextInput placeholder="Masukan username anda" label="Username" />
      <TextInput
        placeholder="Masukan password anda"
        label="Password"
        secureTextEntry={true}
      />

      <Button label="Sign In" onPress={onSignIn} />
      <Button label="Sign in Google" color="red" colorText="#ffffff" />
      <Button label="Sign in Facebook" color="blue" colorText="#ffffff" />
      <Button label="Sign in Apple" color="black" colorText="#ffffff" />
    </View>
  );
};

export default Login;

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
