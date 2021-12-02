import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  StatusBar,
  Dimensions,
} from 'react-native';
import RoundIconBtn from '../components/RoundIconBtn';
import colors from '../misc/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {catchClause} from '@babel/types';

export default function Intro({onFinish}) {
  const [name, setName] = useState('');

  const handleOnChangeText = value => {
    setName(value);
  };

  const handleSubmit = async () => {
    const user = {name: name};
    try {
      await AsyncStorage.setItem('user', JSON.stringify(user));
    } catch (e) {
      console.log(e);
    }

    if (onFinish) {
      onFinish();
    }
  };

  return (
    <>
      <StatusBar hidden />
      <View style={styles.container}>
        <Text style={styles.title}>Enter your name to continue</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          value={name}
          onChangeText={value => handleOnChangeText(value)}
        />
        {name.trim().length >= 3 ? (
          <RoundIconBtn antIconName="arrowright" onPress={handleSubmit} />
        ) : null}
      </View>
    </>
  );
}

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  input: {
    borderColor: colors.PRIMARY,
    borderWidth: 2,
    width: width - 50,
    height: 48,
    borderRadius: 10,
    paddingLeft: 16,
    fontSize: 20,
    color: colors.DARK,
    fontWeight: '700',
    marginBottom: 16,
  },
  title: {
    alignSelf: 'flex-start',
    paddingLeft: 28,
    marginBottom: 8,
    opacity: 0.5,
  },
});
