import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Error = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.error}> Error! </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    fontSize: 25,
  },
});

export default Error;
