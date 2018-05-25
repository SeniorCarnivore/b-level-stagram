import React from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';

import {
  Text,
  Typography,
  Colors,
} from 'react-native-ui-lib';

import axios from 'axios';

import AppCamera from './components/Camera';
import BottomMenu from './components/BottomMenu';
import Feed from './components/Feed';
import Friends from './components/Friends';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeScreen: 'camera',
      friends: [],
    };

    this.getUsers(30)
  }

  toggleScreen = screen => {
    const { activeScreen } = this.state;

    this.setState({
      activeScreen: screen
    });
  }

  isScreenActive = screen =>
    this.state.activeScreen === screen;

  getUsers = amount =>
    axios.get('https://randomuser.me/api/', {
      params: {
        dataType: 'json',
        results: amount,
      }
    })
    .then(response => {
      this.setState({
        friends: response.data.results
      });
    })
    .catch(error => {
      console.log(error);
      return [];
    });

  render() {
    const {
      isScreenActive,
      toggleScreen
    } = this;

    const {
      activeScreen,
      friends
    } = this.state;

    const headerTitle = activeScreen.toUpperCase()

    return (
      <View style={ styles.container }>
        <View style={ styles.header }>
          <Text black h1 center>{ headerTitle }</Text>
        </View>

        <View style={styles.content}>
          { isScreenActive('feed') && <Feed/> }
          { isScreenActive('camera') && <AppCamera/> }
          { isScreenActive('friends') &&
            <Friends
              friends = { friends }
            />
          }
        </View>

        <BottomMenu
          handleToggleScreen = { toggleScreen }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#999',
  },

  container: {
    flex: 1,
  },

  content: {
    flex: .9
  },
});

Colors.loadColors({
  black: '#000',
});

Typography.loadTypographies({
  h1: {
    fontSize: 30,
    lineHeight: 50
  },
});

export default App;
