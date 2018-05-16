import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Header,
  Button
} from 'react-native-elements';

import { Icon } from 'react-native-elements/FontAwesome';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header style={styles.header}
          // leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          // rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <View style={styles.content}>
        </View>
        <View style={styles.bottomMenu}>
        <Button
          icon={
            <Icon
              name='arrow-right'
              size={15}
              color='white'
            />
          }
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },

  bottomMenu: {
    flex: .1,
    height: 50,
    backgroundColor: '#666',
  },

  content: {
    flex: .9
  },
});
