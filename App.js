import React from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Header,
  Button
} from 'react-native-elements';

import AppCamera from './components/Camera';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cameraOn: false
    };
  }

  toggleCamera = () => {
    const { cameraOn } = this.state;

    this.setState({
      cameraOn: !cameraOn
    });
  }

  render() {
    const { cameraOn } = this.state;

    return (
      <View style={styles.container}>
        <Header style={styles.header}
          leftComponent={{ icon: 'menu', color: '#fff' }}
          centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
          rightComponent={{ icon: 'home', color: '#fff' }}
        />
        {
          cameraOn &&
          <View style={styles.content}>
            <AppCamera/>
          </View>
        }
        <View style={[styles.bottomMenu, {}]}>
          <Button onPress={ this.toggleCamera } buttonStyle={styles.cameraButton}
            icon={{
              name: 'camera',
              size: 40,
              style: {
                marginRight: 0
              }
            }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bottomMenu: {
    flex: .1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#666',
  },

  content: {
    flex: .9
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

export default App;
