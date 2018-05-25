import React from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Avatar,
  Button,
  ListItem
} from 'react-native-ui-lib';

import Icon from 'react-native-vector-icons/FontAwesome';

import { createInitials } from '../helpers/Helpers'

class Friend extends React.Component {

  render() {
    const { data } = this.props;

    const {
      picture,
      name,
      login,
    } = data;

    const {
      first,
      last,
    } = name;

    const { username } = login;
    const { thumbnail } = picture;
    const initials = createInitials(first, last);

    return (
      <ListItem
        style = { styles.friend }
      >
        <ListItem.Part left>
          <Avatar
            containerStyle = { styles.avatar }
            title = { initials }
            imageSource = {{
              uri: thumbnail
            }}
          />
        </ListItem.Part>

        <ListItem.Part middle>
          <Text>{ username }</Text>
        </ListItem.Part>
        
        <ListItem.Part style = { styles.buttonHolder }>
          <Button
            title = ''
            style = { styles.button }
            backgroundColor = 'transparent'
            avoidInnerPadding = { true }
            avoidMinWidth = { true }
          >
            <Icon
              name='chevron-right'
              size={ 30 }
              color='#999'
            />
          </Button>
        </ListItem.Part>
      </ListItem>
    );
  }
}

const styles = StyleSheet.create({
  friend: {
    borderBottomWidth: 1,
    borderBottomColor: '#999',
    paddingLeft: 20,
    paddingRight: 20,
  },

  avatar: {
    marginRight: 10
  },

  buttonHolder: {
    minWidth: 50,
    maxWidth: 50,
    marginLeft: 'auto',
    alignSelf: 'flex-end',
  },
});

export default Friend;
