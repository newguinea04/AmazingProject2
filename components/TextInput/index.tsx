import React from 'react';
import {
  TextInput as RNTextInput,
  Text,
  StyleSheet,
  TextInputProps,
} from 'react-native';

type Props = TextInputProps & {
  label: string;
};

const TextInput = ({placeholder, label, ...rest}: Props) => {
  return (
    <>
      <Text style={styles.label}>{label}</Text>
      <RNTextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#888"
        {...rest}
      />
    </>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    height: 45,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 14,
    color: 'black',
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 6,
  },
});
