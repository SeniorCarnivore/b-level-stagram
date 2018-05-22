import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class Feed extends React.Component {

  render() {

    return (
      <View style={ styles.feedList }>
        <Text>Feed</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  feedList: {
    backgroundColor: '#68840f'
  }
});

export default Feed;
