import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import RoundIconBtn from '../components/RoundIconBtn';
import SearchBar from '../components/SearchBar';
import colors from '../misc/colors';

export default function NoteScreen({user}) {
  const [greeting, setGreeting] = useState('Evening');

  function getGreet() {
    const hrs = new Date().getHours();
    console.log('hours', hrs);
    if (hrs === 0 || hrs < 12) setGreeting('Morning');
    else if (hrs === 12 || hrs < 15) setGreeting('Afternoon');
    else if (hrs === 15 || hrs < 19) setGreeting('Evening');
    else if (hrs === 19 || hrs < 24) setGreeting('Night');
    else setGreeting('Night');
  }

  useEffect(() => {
    getGreet();
  }, []);

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={colors.LIGHT} />
      <View style={styles.container}>
        <Text style={styles.header}>{`Great ${greeting}, ${user.name}`}</Text>
        <SearchBar containerStyle={{marginVertical: 16}} />
        <View
          style={[StyleSheet.absoluteFillObject, styles.emptyHeadingContainer]}>
          <Text style={styles.emptyHeading}>Add Notes</Text>
          <RoundIconBtn
            antIconName="plus"
            style={styles.addBtn}
            onPress={() => {
              console.log('opening model');
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 24},
  header: {fontSize: 25, fontWeight: 'bold'},
  emptyHeading: {
    fontSize: 24,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    opacity: 0.2,
  },
  emptyHeadingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    zIndex: -1,
  },
  addBtn: {
    position: 'absolute',
    right: 24,
    bottom: 50,
  },
});
