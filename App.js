import React from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Header,
} from 'react-native-elements';

import AppCamera from './components/Camera';
import BottomMenu from './components/BottomMenu';
import Feed from './components/Feed';
import Friends from './components/Friends';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeScreen: 'feed'
    };
  }

  toggleScreen = screen => {
    const { activeScreen } = this.state;

    this.setState({
      activeScreen: screen
    });
  }

  screenActive = screen =>
    this.state.activeScreen === screen;

  render() {
    const {
      screenActive,
      toggleScreen
    } = this;

    return (
      <View style={ styles.container }>
        <Header style={ styles.header }
          leftComponent={{
            icon: 'menu',
            color: '#fff'
          }}
          centerComponent={{
            text: 'MY TITLE',
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
          { screenActive('friends') && <Friends/> }
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
