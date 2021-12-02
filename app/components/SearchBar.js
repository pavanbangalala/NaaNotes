import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import colors from '../misc/colors';

export default function SearchBar({containerStyle}) {
  return (
    <View style={[styles.container, {...containerStyle}]}>
      <TextInput style={styles.SearchBar} placeholder="Search here" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  SearchBar: {
    borderWidth: 0.5,
    borderColor: colors.PRIMARY,
    height: 40,
    borderRadius: 48,
    paddingHorizontal: 16,
    fontSize: 16,
  },
});
