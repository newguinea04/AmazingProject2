import React from 'react';
import {View, StyleSheet} from 'react-native';
import Title from '../Title';
import TextInput from '../TextInput';
import Button from '../Button';

const Login = () => {
  return (
    <View style={styles.container}>
      <Title text="Welcome" />

      <TextInput label="Username" placeholder="Masukan username anda" />
      <TextInput
        label="Password"
        placeholder="Masukan password anda"
        secureTextEntry
      />

      <Button label="Sign In" color="orange" colorText="white" />
      <Button label="Sign in with Google" color="red" colorText="white" />
      <Button label="Sign in with Facebook" color="blue" colorText="white" />
      <Button label="Sign in with Apple" color="black" colorText="white" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
    justifyContent: 'center',
  },
});
