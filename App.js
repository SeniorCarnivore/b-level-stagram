import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Header,
  Button
} from 'react-native-elements';

import { Camera } from 'react-native-camera';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header style={styles.header}
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        <View style={styles.content}>
        </View>
        <View style={styles.bottomMenu}>
          <Button buttonStyle={styles.cameraButton}
            icon={{
              name: 'camera',
              size: 40,
              style: {
                marginRight: 0
              }
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bottomMenu: {
    flex: .1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#666',
  },

  content: {
    flex: .9
  },

  cameraButton: {
    display: 'flex',
    backgroundColor: "rgba(92, 99,216, 1)",
    width: 50,
    height: 50,
    padding: 0,
    marginRight: 0,
    borderRadius: 51,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
