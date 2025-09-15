import React from 'react';
import {Text, StyleSheet} from 'react-native';

type Props = {
  text: string;
};

const Title = ({text}: Props) => {
  return <Text style={styles.title}>{text}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
    textAlign: 'center',
  },
});
