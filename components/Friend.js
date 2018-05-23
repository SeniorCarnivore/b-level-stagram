import React from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Avatar,
  ListItem
} from 'react-native-elements';

class Friend extends React.Component {

  render() {
    const { data } = this.props;

    const {
      picture,
      name,
      login
    } = data;

    const {
      first: firstName,
      last: lastName
    } = name;

    const initials = (firstName[0] + lastName[0]).toUpperCase();

    return (
      <ListItem
        title={ login.username }
        avatarStyle = {{
          width: 50,
          height: 50
        }}
        leftAvatar = {{
          source: { uri: picture.thumbnail },
          title: initials
        }}
      />
    );
  }
}

export default Friend;
