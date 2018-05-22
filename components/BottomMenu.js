import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import {
  Button,
} from 'react-native-elements';

const BottomMenu = ({ handleToggleScreen }) => (
  <View style={ styles.bottomMenu }>
    <Button
      onPress={ () => handleToggleScreen('feed') }
      buttonStyle={ styles.cameraButton }
      icon={{
        name: 'whatshot',
        size: 40,
        style: {
          marginRight: 0
        }
      }}
    />

    <Button
      onPress={ () => handleToggleScreen('camera') }
      buttonStyle={ styles.cameraButton }
      icon={{
        name: 'camera-alt',
        size: 40,
        style: {
          marginRight: 0
        }
      }}
    />

    <Button
      onPress={ () => handleToggleScreen('friends') }
      buttonStyle={ styles.cameraButton }
      icon={{
        name: 'accessibility',
        size: 40,
        style: {
          marginRight: 0
        }
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  bottomMenu: {
    flex: .1,
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#666',
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

export default BottomMenu;
