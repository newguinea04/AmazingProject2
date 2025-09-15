import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

type ButtonProps = {
  label: string;
  color?: string;
  colorText?: string;
  onPress?: () => void;
};

const Button = ({
  label,
  color = 'orange',
  colorText = 'black',
  onPress,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={styles.button(color)}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={styles.buttonText(colorText)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = {
  button: (color: string) => ({
    backgroundColor: color,
    height: 45,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  }),
  buttonText: (colorText: string) => ({
    color: colorText,
    fontSize: 16,
    fontWeight: 'bold',
  }),
};
