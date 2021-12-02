import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import Intro from './app/screens/Intro';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NoteScreen from './app/screens/NoteScreen';

export default function App(props) {
  const [user, setUser] = useState({});
  const findUser = async () => {
    try {
      const result = await AsyncStorage.getItem('user');
      if (result != null) {
        setUser(JSON.parse(result));
        console.log('result', user);
      }
    } catch (e) {
      console.log('fetch error', e);
    }
  };

  useEffect(() => {
    findUser();
  }, []);

  const onFinish = () => {
    findUser();
  };

  if (user.name) {
    return <NoteScreen user={user} />;
  } else {
    return <Intro onFinish={onFinish} />;
  }
}
