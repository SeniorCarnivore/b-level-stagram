import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import Friend from './Friend';

class Friends extends React.Component {

  buildFriendsList = friends =>
    friends.map(friend => {
      const { username } = friend.login;
  
      return <Friend
        key = { username }
        data = { friend }
      />
    })

  render() {
    const { friends } = this.props;
    
    return (
      <View style={ styles.friendsList }>
        { friends && this.buildFriendsList(friends) }
        { !friends && <Text>You have no friends</Text> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  friendsList: {
    overflow: 'scroll'
  }
});

export default Friends;
