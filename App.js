import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Header,
} from 'react-native-elements';

import axios from 'axios';

import AppCamera from './components/Camera';
import BottomMenu from './components/BottomMenu';
import Feed from './components/Feed';
import Friends from './components/Friends';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeScreen: 'friends',
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

  screenActive = screen =>
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
      screenActive,
      toggleScreen
    } = this;

    const {
      activeScreen,
      friends
    } = this.state;

    return (
      <View style={ styles.container }>
        <Header style={ styles.header }
          leftComponent={{
            icon: 'menu',
            color: '#fff'
          }}
          centerComponent={{
            text: activeScreen.toUpperCase(),
            style: { color: '#fff' }
          }}
          rightComponent={{
            icon: 'home',
            color: '#fff'
          }}
        />

        <View style={styles.content}>
          { screenActive('feed') && <Feed/> }
          { screenActive('camera') && <AppCamera/> }
          { screenActive('friends') &&
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
  container: {
    flex: 1,
  },

  content: {
    flex: .9
  },
});

export default App;
