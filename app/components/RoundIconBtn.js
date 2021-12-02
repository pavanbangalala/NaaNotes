import React from 'react';
import {StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../misc/colors';

export default function RoundIconBtn({
  antIconName,
  size,
  color,
  style,
  onPress,
}) {
  return (
    <AntDesign
      name={antIconName}
      size={size || 24}
      color={color || colors.DARK}
      style={[styles.icon, {...style}]}
      onPress={onPress}
    />
  );
}

const styles = StyleSheet.create({
  icon: {
    backgroundColor: colors.PRIMARY,
    padding: 16,
    borderRadius: 50,
    elevation: 5,
  },
});
