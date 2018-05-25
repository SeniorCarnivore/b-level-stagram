import React from 'react';

import {
  StyleSheet,
  Text,
  ScrollView,
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
      <ScrollView style={ styles.friendsList }>
        { friends && this.buildFriendsList(friends) }
        { !friends && <Text>You have no friends</Text> }
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  friendsList: {
    paddingTop: 1
  }
});

export default Friends;
