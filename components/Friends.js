import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { getUsers } from '../helpers/Requests';

class Friends extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  render() {

    return (
      <View style={ styles.friendsList }>
        <Text>Friends</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  friendsList: {
    backgroundColor: '#f064de'
  }
});

export default Friends;
