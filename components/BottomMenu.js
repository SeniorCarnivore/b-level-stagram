import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import {
  Button,
} from 'react-native-ui-lib';

import Icon from 'react-native-vector-icons/FontAwesome';

const BottomMenu = ({ handleToggleScreen }) => (
  <View style={ styles.bottomMenu }>
    <Button
      title = ''
      onPress = { () => handleToggleScreen('feed') }
      style = { styles.button }
      avoidInnerPadding = { true }
      avoidMinWidth = { true }
    >
      <Icon
        name = 'fire'
        size = { 30 }
        color = '#fff'
        paddingVertical = { 0 }
      />
    </Button>

    <Button
      title = ''
      onPress = { () => handleToggleScreen('camera') }
      style = { styles.button }
      avoidInnerPadding = { true }
      avoidMinWidth = { true }
    >
      <Icon
        name = 'camera' 
        size = { 30 }
        color = '#fff'
        paddingVertical = { 0 }
      />
    </Button>

    <Button
      title = ''
      onPress = { () => handleToggleScreen('friends') }
      style = { styles.button }
      avoidInnerPadding = { true }
      avoidMinWidth = { true }
    >
      <Icon
        name = 'child'
        size = { 30 }
        color = '#fff'
        paddingVertical = { 0 }
      />
    </Button>
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

  button: {
    display: 'flex',
    backgroundColor: "rgba(92, 99,216, 1)",
    minWidth: 50,
    maxWidth: 50,
    height: 50,
    padding: 0,
    marginRight: 0,
    borderRadius: 51,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 0,
  }
});

export default BottomMenu;
